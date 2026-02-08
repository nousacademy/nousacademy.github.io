import { z } from 'zod';
import type { SourceModule } from '../types';
import type { BodymapDataset } from '../data/types';
import type { BodyEntity, BodymapCollection, RegionId } from '../../schema/bodymap.zod';
import { BodyEntitySchema } from '../../schema/bodymap.zod';
import { buildEntityMap } from '../../utils/lookups';

/**
 * Build a SourceModule from a dataset.
 * Option A: getCollection(region) returns ALL entities (no filtering yet).
 * Validates dataset at module-load time (first import) and builds byId map once.
 */
export function makeSource(dataset: BodymapDataset): SourceModule {
  // 1) Runtime validate shape
  const entities: BodyEntity[] = z.array(BodyEntitySchema).parse(dataset.entities);

  // 2) Ensure unique ids
  const seen = new Set<string>();
  for (const e of entities) {
    if (seen.has(e.id)) {
      throw new Error(`[${dataset.id}] Duplicate entity id: "${e.id}"`);
    }
    seen.add(e.id);
  }

  // 3) (Optional but recommended) Validate region.contains references
  for (const e of entities) {
    if (e.type === 'region') {
      for (const childId of e.contains) {
        if (!seen.has(childId)) {
          throw new Error(
            `[${dataset.id}] Region "${e.id}" contains unknown id "${childId}"`
          );
        }
      }
    }
  }

  // 4) Build lookup map
  const byId = buildEntityMap(entities);

  // 5) Return module with shared behavior
  return {
    id: dataset.id,
    label: dataset.label,
    font: dataset.font,

    getCollection(region?: RegionId): BodymapCollection {
      return {
        source: dataset.id,
        region,
        font: dataset.font,
        entities // Option A: unfiltered
      };
    },

    getEntity(id: string): BodyEntity | null {
      return byId[id] ?? null;
    }
  };
}
