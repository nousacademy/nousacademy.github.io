import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ url, fetch }) => {
    const source = url.searchParams.get('source');
    if (!source) return { source: null, collection: null };

    const res = await fetch(`/api/v1/bodymap?source=${source}&region=front`);
    if (!res.ok) throw new Error('Failed to load front bodymap');

    return { source, collection: await res.json() };
}