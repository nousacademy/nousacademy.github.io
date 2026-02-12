import type { BodyEntity, BodymapCollection, RegionId, SourceId } from '../schema/bodymap.zod';

type RegionKey = 'front' | 'back' | 'brain';

export type SourceModule = {
  id: SourceId;
  label: string;
  font?: string;
  getCollection(region?: RegionId): BodymapCollection;
  getEntity(id: string): BodyEntity | null;
};

export type SourceMeta = {
  label: string;
  regions: RegionKey[];
}
