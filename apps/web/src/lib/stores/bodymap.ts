import { writable } from 'svelte/store';
import type { SourceId } from '$lib/types/bodymap';

export const bodymapSource = writable<SourceId>('sefer_yetzirah');
