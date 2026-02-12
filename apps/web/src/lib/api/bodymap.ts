import { PUBLIC_API_BASE } from '$env/static/public';
import type { BodymapCollection, RegionId, SourceId } from '$lib/types/bodymap';

export async function getBodymapCollection(source: SourceId, region?: RegionId) {
	const url = new URL(`${PUBLIC_API_BASE}/api/v1/bodymap`);
	url.searchParams.set('source', source);
	if (region) url.searchParams.set('region', region);

	const res = await fetch(url.toString());
	const json = await res.json().catch(() => null);

	if (!res.ok) {
		// bubble a useful error
		const msg = json?.error?.message || JSON.stringify(json) || `HTTP ${res.status}`;
		throw new Error(msg);
	}

	return json as BodymapCollection;
}

export async function getBodymapEntity(source: string, id: string) {
  const url = new URL(`/api/v1/bodymap/entities/${encodeURIComponent(id)}`, PUBLIC_API_BASE);
  url.searchParams.set('source', source);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load entity (${res.status})`);
  return res.json();
}
