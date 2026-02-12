import { writable } from 'svelte/store';
import type { RegionId, SourceId } from '$lib/types/bodymap';

export const bodymapSource = writable<SourceId>('sefer_yetzirah');
// export const bodymapRegion = writable<RegionId>('front');
