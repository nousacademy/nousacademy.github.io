import { missingParam, invalidParam, internalError } from '../utils/http';
import type { SourceMeta, SourceModule } from './types';
import type { BodymapDataset } from './data/types';
import { makeSource } from './utils/makeSource';

// Lazy dataset loaders (only load what’s requested)
export const DATASET_LOADERS: Record<string, () => Promise<BodymapDataset>> = {
  sefer_yetzirah: async () => (await import('./data/sefer_yetzirah')).seferYetzirah,
  hekhalot: async () => (await import('./data/hekhalot')).hekhalot,
  phaedrus: async () => (await import('./data/phaedrus')).phaedrus
};

// Cache built SourceModules per isolate
const cache = new Map<string, SourceModule>();

export async function requireSource(searchParams: URLSearchParams): Promise<SourceModule | Response> {
  const raw = searchParams.get('source');
  if (!raw) return missingParam('source');

  const key = raw;

  const cached = cache.get(raw);
  if (cached) return cached;

  const loader = DATASET_LOADERS[key];
  if (!loader) return invalidParam('source', raw, Object.keys(DATASET_LOADERS));

  try {
    const dataset = await loader();
    const module = makeSource(dataset);

    cache.set(key, module);
    return module;
  } catch (err) {
    return internalError(
      err instanceof Error ? { name: err.name, message: err.message } : err
    );
  }
}

export async function loadSourceById(id: string): Promise<SourceModule> {
	const cached = cache.get(id);
	if (cached) return cached;

	const loader = DATASET_LOADERS[id as keyof typeof DATASET_LOADERS];
	if (!loader) {
		// throw so callers can decide to skip or return 500
		throw new Error(`Unknown source "${id}"`);
	}

	const dataset = await loader();
	const module = makeSource(dataset);

	cache.set(id, module);
	return module;
}


export const SOURCE_META: Record<keyof typeof DATASET_LOADERS, SourceMeta> = {
  sefer_yetzirah: {
    label: 'Sefer Yetzirah',
    regions: ['front']
  },
  phaedrus: {
    label: 'Plato — Phaedrus',
    regions: ['front']
  },
  hekhalot: {
    label: 'Hekhalot Literature',
    regions: ['front']
  }
};

