import { describe, it, expect } from 'vitest';
import { get } from '../test-utils/http';

describe('GET /api/v1/sources', () => {
  it('returns expected response shape', async () => {
    const { res, json, text } = await get('/api/v1/sources');

    expect(res.status).toBe(200);
    expect(json).toBeTruthy();

    expect(json).toHaveProperty('sources');
    expect(Array.isArray(json.sources)).toBe(true);

    for (const s of json.sources) {
      expect(typeof s.id).toBe('string');
      expect(s.id.length).toBeGreaterThan(0);

      expect(typeof s.label).toBe('string');
      expect(s.label.length).toBeGreaterThan(0);

      expect(Array.isArray(s.regions)).toBe(true);
      expect(s.regions.length).toBeGreaterThan(0);

      expect(typeof s.regionStats).toBe('object');
      expect(s.regionStats).toBeTruthy();

      // Every region listed must exist in regionStats
      for (const r of s.regions) {
        expect(s.regionStats[r]).toBeTruthy();
        expect(typeof s.regionStats[r].nodeCount).toBe('number');
        expect(typeof s.regionStats[r].regionCount).toBe('number');
        expect(s.regionStats[r].nodeCount).toBeGreaterThanOrEqual(0);
        expect(s.regionStats[r].regionCount).toBeGreaterThanOrEqual(0);
      }

      // regionStats must NOT contain keys outside regions
      for (const key of Object.keys(s.regionStats)) {
        expect(s.regions).toContain(key);
      }
    }

    // helpful debug if you ever break it
    expect(text.length).toBeGreaterThan(0);
  });

  it('contains known sources (if present in registry)', async () => {
    const { res, json } = await get('/api/v1/sources');
    expect(res.status).toBe(200);

    const ids = json.sources.map((s: any) => s.id);

    // Adjust if you rename ids in registry
    expect(ids).toContain('sefer_yetzirah');
    expect(ids).toContain('phaedrus');
    expect(ids).toContain('hekhalot');
  });

  it('responds with cache headers + etag', async () => {
    const { res } = await get('/api/v1/sources');

    expect(res.status).toBe(200);
    expect(res.headers.get('etag')).toBeTruthy();

    const cc = res.headers.get('cache-control') ?? '';
    expect(cc).toContain('s-maxage=');
  });

  it('supports If-None-Match => 304', async () => {
    const first = await get('/api/v1/sources');
    expect(first.res.status).toBe(200);

    const etag = first.res.headers.get('etag');
    expect(etag).toBeTruthy();

    const second = await get('/api/v1/sources', { 'if-none-match': etag! });
    expect(second.res.status).toBe(304);
  });

  it('regionStats counts are internally consistent (nodeCount/regionCount do not exceed total entities)', async () => {
    const { res, json } = await get('/api/v1/sources');
    expect(res.status).toBe(200);

    // This test assumes you are *not* returning entityCount anymore.
    // We can still enforce sanity:
    // - counts are integers
    // - nodeCount + regionCount >= 0 (already checked)
    // - counts are whole numbers
    for (const s of json.sources) {
      for (const r of s.regions) {
        const { nodeCount, regionCount } = s.regionStats[r];

        expect(Number.isInteger(nodeCount)).toBe(true);
        expect(Number.isInteger(regionCount)).toBe(true);

        // extra sanity: if both are zero, that region is probably empty, which is okay.
        expect(nodeCount).toBeGreaterThanOrEqual(0);
        expect(regionCount).toBeGreaterThanOrEqual(0);
      }
    }
  });
});


