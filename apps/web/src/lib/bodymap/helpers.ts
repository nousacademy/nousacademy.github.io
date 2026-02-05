import type { Body, BodyEntity, BodyNode, BodyRegion } from './types';

export function buildLookups(body: Body) {
  const entitiesByKey = new Map<string, BodyEntity>();
  const nodesByKey = new Map<string, BodyNode>();
  const regionsByKey = new Map<string, BodyRegion>();
  const nodeKeys = new Set<string>();
  const regionKeys = new Set<string>();

  for (const e of body.entities) {
    if (e.type === 'node') {
      entitiesByKey.set(e.node, e);
      nodesByKey.set(e.node, e);
      nodeKeys.add(e.node);
    } else {
      entitiesByKey.set(e.region, e);
      regionsByKey.set(e.region, e);
      regionKeys.add(e.region);
    }
  }

  return { entitiesByKey, nodesByKey, regionsByKey, nodeKeys, regionKeys };
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

export async function getHumanBodyKnowledge(region: string, source: string) {
  const API_BASE = import.meta.env.PUBLIC_API_BASE;
  const res = await fetch(`${API_BASE}/api/human/body/${region}?src=${source}`);
  return res.json();
}

