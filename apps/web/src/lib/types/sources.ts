interface RegionStats {
    nodeCount: number;
    regionCount: number;
}

export type SourceItem = {
    id: string;
    label: string;
    regions: string[];
    regionStats?: RegionStats;
}

export type SourcesResponse = {
    sources: SourceItem[];
}
