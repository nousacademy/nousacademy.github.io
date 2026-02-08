import type { BodyEntity, BodymapCollection, RegionId, SourceId } from '../schema/bodymap.zod';

export type SourceModule = {
  id: SourceId;
  label: string;
  font?: string;
  getCollection(region?: RegionId): BodymapCollection;
  getEntity(id: string): BodyEntity | null;
};
