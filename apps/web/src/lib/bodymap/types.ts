export type BodyEntityType = 'node' | 'region';

export interface BodyEntityBase {
  type: BodyEntityType;
  tags: string[];
  title: string;
  description: string;
}

export interface BodyNode extends BodyEntityBase {
  type: 'node';
  node: string;
}

export interface BodyRegion extends BodyEntityBase {
  type: 'region';
  region: string;
  contains: string[];
}

export type BodyEntity = BodyNode | BodyRegion;

export interface Body {
  font?: string;
  entities: BodyEntity[];
}

export type Region = 'front' | 'back';
