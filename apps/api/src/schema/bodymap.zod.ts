import { z } from 'zod';

export const SourceIdSchema = z.enum(['sefer_yetzirah', 'phaedrus', 'hekhalot']);
export type SourceId = z.infer<typeof SourceIdSchema>;

export const RegionIdSchema = z.enum(['front', 'back']);
export type RegionId = z.infer<typeof RegionIdSchema>;

const BaseEntitySchema = z.object({
    /** 
        Canonical id (also SVG hook)
    */
    id: z.string().min(1),             
    tags: z.array(z.string()).default([]),
    title: z.string(),
    description: z.string()
});

export const BodyNodeSchema = BaseEntitySchema.extend({
    type: z.literal('node')
});

export const BodyRegionSchema = BaseEntitySchema.extend({
    type: z.literal('region'),
    /** 
        Only regions have contains
    */
    contains: z.array(z.string()).default([])
});

export const BodyEntitySchema = z.discriminatedUnion('type', [
    BodyNodeSchema,
    BodyRegionSchema
]);
export type BodyEntity = z.infer<typeof BodyEntitySchema>;

export const BodymapCollectionSchema = z.object({
    source: SourceIdSchema,
    region: RegionIdSchema.optional(),
    font: z.string().optional(),
    entities: z.array(BodyEntitySchema)
});
export type BodymapCollection = z.infer<typeof BodymapCollectionSchema>;
