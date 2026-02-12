import type { BodyEntity, BodymapCollection } from '$lib/types/bodymap';
// import type { BodyEntity } from './types';

export function buildLookups(collection: BodymapCollection) {
	const byId: Record<string, BodyEntity> = {};

	for (const e of collection.entities) {
		byId[e.id] = e;
	}

	return { byId };
}

export function findEntityKeyFromClassList(
  classList: DOMTokenList,
  nodeKeys: Set<string>,
  regionKeys: Set<string>
) {
  const classes = Array.from(classList);
  // Prefer node over region
  return classes.find((c) => nodeKeys.has(c)) ?? classes.find((c) => regionKeys.has(c)) ?? null;
}
