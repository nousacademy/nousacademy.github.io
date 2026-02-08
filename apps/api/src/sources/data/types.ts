import type { BodyEntity, SourceId } from '../../schema/bodymap.zod';

export type BodymapDataset = {
  id: SourceId;
  label: string;
  font?: string;
  entities: BodyEntity[];
};
