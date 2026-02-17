import type { Page } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import { PUBLIC_API_BASE } from '$env/static/public';
import type { SourcesResponse } from '$lib/types/sources';

export function getSelectedSource(url: URL): string {
	return url.searchParams.get('source') ?? '';
}

export async function setSourceInUrl(page: Page, source: string) {
	const url = new URL(page.url);
	url.searchParams.set('source', source);

	await goto(url, {
		replaceState: true,
		keepFocus: true,
		noScroll: true
	});
}

export async function fetchSources(): Promise<SourcesResponse> {
	const res = await fetch(`${PUBLIC_API_BASE}/api/v1/sources`);
	if (!res.ok) return { sources: [] };
	return (await res.json()) as SourcesResponse;
}
