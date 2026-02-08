import { PUBLIC_API_BASE } from '$env/static/public';

export async function getBodymap(source: string, region: string) {
  const url = new URL('/api/v1/bodymap', PUBLIC_API_BASE);
  url.searchParams.set('source', source);
  url.searchParams.set('region', region);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load bodymap (${res.status})`);
  return res.json();
}

export async function getBodymapEntity(source: string, id: string) {
  const url = new URL(`/api/v1/bodymap/entities/${encodeURIComponent(id)}`, PUBLIC_API_BASE);
  url.searchParams.set('source', source);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load entity (${res.status})`);
  return res.json();
}
