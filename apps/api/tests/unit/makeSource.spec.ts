import { describe, it, expect } from 'vitest';
import { makeSource } from '../../src/sources/utils/makeSource';
import type { BodymapDataset } from '../../src/sources/data/types';
import type { BodyEntity } from '../../src/schema/bodymap.zod';

function dataset(partial: Partial<BodymapDataset>): BodymapDataset {
  return {
    id: (partial.id as any) ?? 'sefer_yetzirah',
    label: partial.label ?? 'Test',
    font: partial.font,
    entities: (partial.entities as any) ?? []
  };
}

describe('makeSource (unit)', () => {
  it('builds a module with getCollection + getEntity (Option A unfiltered)', () => {
    const entities: BodyEntity[] = [
      {
        id: 'liver',
        type: 'node',
        tags: ['x'],
        title: 'Liver',
        description: '...'
      },
      {
        id: 'diaphragm',
        type: 'region',
        tags: ['y'],
        title: 'Diaphragm',
        description: '...',
        contains: ['liver']
      }
    ];

    const mod = makeSource(
      dataset({
        id: 'sefer_yetzirah' as any,
        label: 'Sefer Yetzirah',
        font: 'Proto-Canaanite',
        entities
      })
    );

    const col = mod.getCollection('front');
    expect(col.source).toBe('sefer_yetzirah');
    expect(col.region).toBe('front');
    expect(col.font).toBe('Proto-Canaanite');
    expect(col.entities.length).toBe(2); // Option A: unfiltered

    const e = mod.getEntity('liver');
    expect(e).toBeTruthy();
    expect(e?.id).toBe('liver');

    const missing = mod.getEntity('nope');
    expect(missing).toBeNull();
  });

  it('throws on duplicate entity ids', () => {
    const entities: any[] = [
      { id: 'liver', type: 'node', tags: [], title: 'A', description: '' },
      { id: 'liver', type: 'node', tags: [], title: 'B', description: '' }
    ];

    expect(() =>
      makeSource(
        dataset({
          id: 'sefer_yetzirah' as any,
          entities: entities as any
        })
      )
    ).toThrow(/Duplicate entity id/i);
  });

  it('throws if a region contains an unknown id', () => {
    const entities: any[] = [
      { id: 'diaphragm', type: 'region', tags: [], title: 'D', description: '', contains: ['heart'] }
      // note: no "heart" entity exists
    ];

    expect(() =>
      makeSource(
        dataset({
          id: 'sefer_yetzirah' as any,
          entities: entities as any
        })
      )
    ).toThrow(/contains unknown id/i);
  });

  it('throws if schema is invalid (bad literal type)', () => {
    const entities: any[] = [
      // invalid: type must be "node" or "region"
      { id: 'x', type: 'NODE', tags: [], title: 'X', description: '' }
    ];

    expect(() =>
      makeSource(
        dataset({
          id: 'sefer_yetzirah' as any,
          entities: entities as any
        })
      )
    ).toThrow();
  });

  it('throws if node shape is invalid (missing required field)', () => {
    const entities: any[] = [
      // missing "description"
      { id: 'liver', type: 'node', tags: [], title: 'Liver' }
    ];

    expect(() =>
      makeSource(
        dataset({
          id: 'sefer_yetzirah' as any,
          entities: entities as any
        })
      )
    ).toThrow();
  });

  it('throws if region shape is invalid (contains not array)', () => {
    const entities: any[] = [
      { id: 'torso', type: 'region', tags: [], title: 'Torso', description: '', contains: 'liver' }
    ];

    expect(() =>
      makeSource(
        dataset({
          id: 'sefer_yetzirah' as any,
          entities: entities as any
        })
      )
    ).toThrow();
  });
});
