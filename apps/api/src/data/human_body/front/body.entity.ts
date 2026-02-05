interface BodyEntityBase {              
    type: BodyEntityType; // 'node' | 'region'
    tags: string[];
    title: string;
    description: string;
}

export type BodyEntityType = 'node' | 'region';

export interface BodyNode extends BodyEntityBase {
    type: 'node';
    node: string;
}

export interface BodyRegion extends BodyEntityBase {
    type: 'region';
    region: string;
    contains: string[]; // array of node ids
}

export type BodyEntity = BodyNode | BodyRegion;

export interface Body {
    font?: string;
    entities: BodyEntity[];
}
