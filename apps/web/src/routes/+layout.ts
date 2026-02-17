import type { LayoutLoad } from "./$types";
import type { SourcesResponse } from "$lib/types/sources";

export const load: LayoutLoad = async ({ fetch }) => {
    const res = await fetch('/api/v1/sources');
    if (!res.ok) {
        return { sources: [] };
    }

    const json = (await res.json()) as SourcesResponse;
    return { sources: json.sources }
}