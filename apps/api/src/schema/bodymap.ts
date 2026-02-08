export type SourceId = 'sefer_yetzirah' | 'odyssey';
export type RegionId = 'front' | 'back';

type BodyEntityBase = {
    /**
     * Canonical ID + SVG class
     */
    id: string;
    tags: string[];
    title: string;
    description: string;
};

export type BodyNode = BodyEntityBase & {
    type: 'node';
};

export type BodyRegion = BodyEntityBase & {
    type: 'region';
    contains: string[];
};

export type BodyEntity = BodyNode | BodyRegion;

export type BodymapCollection = {
    source: SourceId;
    region?: RegionId;
    font?: string;
    entities: BodyEntity[];
};
