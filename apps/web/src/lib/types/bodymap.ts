export type RegionId = 'front' | 'back';

// match your API source ids
export type SourceId = 'sefer_yetzirah' | 'phaedrus' | 'hekhalot';

export type BodyEntityType = 'node' | 'region';

export interface BodyEntityBase {
	id: string; // canonical key used in SVG class + lookups
	type: BodyEntityType;
	tags: string[];
	title: string;
	description: string;
}

export interface BodyNode extends BodyEntityBase {
	type: 'node';
}

export interface BodyRegion extends BodyEntityBase {
	type: 'region';
	contains: string[];
}

export type BodyEntity = BodyNode | BodyRegion;

export interface BodymapCollection {
	source: SourceId;
	region?: RegionId;
	font?: string;
	entities: BodyEntity[];
}
