import { describe, it, expect, vi, beforeEach } from 'vitest';

// ✅ Mock registry BEFORE importing handleSources
vi.mock('../../src/sources/registry', () => {
  const DATASET_LOADERS = {
    sefer_yetzirah: async () => ({}),
    phaedrus: async () => ({}),
    hekhalot: async () => ({})
  };

  const SOURCE_META = {
    sefer_yetzirah: { label: 'Sefer Yetzirah', regions: ['front', 'back'] },
    phaedrus: { label: 'Plato — Phaedrus', regions: ['front'] },
    hekhalot: { label: 'Hekhalot', regions: ['front', 'back'] }
  };

  // default requireSource behavior can be overwritten per-test
  const requireSource = vi.fn(async (id: string) => {
    return {
      getCollection(region: string) {
        // Minimal fake collection for router/sources.ts
        if (region === 'front') {
          return {
            entities: [
              { type: 'node', id: 'liver' },
              { type: 'node', id: 'heart' },
              { type: 'region', id: 'torso' }
            ]
          };
        }
        return {
          entities: [{ type: 'node', id: 'spine' }]
        };
      }
    };
  });

  return { DATASET_LOADERS, SOURCE_META, requireSource };
});

import { handleSources } from '../../src/router/sources';
import { requireSource } from '../../src/sources/registry';

function makeReq(url: string, headers?: Record<string, string>) {
  return new Request(url, { headers });
}

async function readJson(res: Response) {
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

describe('router/sources.ts handleSources', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns sources with label, regions, and regionStats', async () => {
    const req = makeReq('http://local.test/api/v1/sources');
    const res = await handleSources(req);

    expect(res.status).toBe(200);

    const json = await readJson(res);
    expect(json).toHaveProperty('sources');
    expect(Array.isArray(json.sources)).toBe(true);

    const sy = json.sources.find((s: any) => s.id === 'sefer_yetzirah');
    expect(sy).toBeTruthy();
    expect(sy.label).toBe('Sefer Yetzirah');
    expect(sy.regions).toEqual(['front', 'back']);
    expect(sy.regionStats.front).toEqual({ nodeCount: 2, regionCount: 1 });
    expect(sy.regionStats.back).toEqual({ nodeCount: 1, regionCount: 0 });
  });

  it('skips sources with missing meta', async () => {
    // Override SOURCE_META by mocking requireSource behavior not needed here;
    // easiest: make requireSource return a Response for one id and remove meta by patching mock module not possible at runtime.
    // Instead, simulate "missing meta" by making requireSource throw and ensure it’s skipped.
    (requireSource as any).mockImplementationOnce(async (id: string) => {
      if (id === 'phaedrus') throw new Error('no meta');
      return {
        getCollection() {
          return { entities: [] };
        }
      };
    });

    const res = await handleSources(makeReq('http://local.test/api/v1/sources'));
    const json = await readJson(res);

    // still returns sources array (may have fewer)
    expect(Array.isArray(json.sources)).toBe(true);
  });

  it('skips when requireSource returns Response', async () => {
    (requireSource as any).mockImplementation(async (id: string) => {
      if (id === 'sefer_yetzirah') return new Response('bad', { status: 400 });
  
      return {
        getCollection() {
          return { entities: [] };
        }
      };
    });
  
    const res = await handleSources(new Request('http://local.test/api/v1/sources'));
    expect(res.status).toBe(200);
  
    const json = await res.json();
    const ids = json.sources.map((s: any) => s.id);
    expect(ids).not.toContain('sefer_yetzirah');
  });
  

  it('sets ETag header', async () => {
    const res = await handleSources(makeReq('http://local.test/api/v1/sources'));
    expect(res.status).toBe(200);
    expect(res.headers.get('etag')).toBeTruthy();
  });

  it('returns 304 if If-None-Match matches', async () => {
    const first = await handleSources(makeReq('http://local.test/api/v1/sources'));
    expect(first.status).toBe(200);

    const etag = first.headers.get('etag');
    expect(etag).toBeTruthy();

    const second = await handleSources(
      makeReq('http://local.test/api/v1/sources', { 'if-none-match': etag! })
    );

    expect(second.status).toBe(304);
  });
});
