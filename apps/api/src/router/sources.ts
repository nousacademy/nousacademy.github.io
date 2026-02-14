import { DATASET_LOADERS, loadSourceById, requireSource, SOURCE_META } from '../sources/registry';
import type { SourceModule } from '../sources/types';


export type SourcesResponseItem = {
	id: string;
	label: string;
	regions: string[];
	regionStats: Record<string, RegionStats>;
};


type RegionStats = {
	nodeCount: number;
	regionCount: number;
};

function json(body: unknown, init?: ResponseInit) {
	return new Response(JSON.stringify(body, null, 2), {
		...init,
		headers: {
			'content-type': 'application/json; charset=utf-8',
			...(init?.headers || {})
		}
	});
}

async function computeEtag(obj: unknown) {
	const data = new TextEncoder().encode(JSON.stringify(obj));
	const hash = await crypto.subtle.digest('SHA-256', data);
	const hex = Array.from(new Uint8Array(hash))
		.map((b) => b.toString(16).padStart(2, '0'))
		.join('');
	return `"${hex}"`;
}

export async function handleSources(request: Request): Promise<Response> {
	const ids = Object.keys(DATASET_LOADERS).sort();

	const sources: SourcesResponseItem[] = [];

	for (const id of ids) {
		try {
			// ✅ fix meta not found
			const meta = (SOURCE_META as Record<string, { label: string; regions: string[] }>)[id];
			if (!meta) continue;

			// loads + zod validates + caches
			const mod = await loadSourceById(id);
			const regions = [ ...meta.regions ].sort();
			const regionStats: Record<string, RegionStats> = {};

			for (const region of regions) {
				const col = mod.getCollection(region as any);
				const entities = col.entities ?? [];

				regionStats[region] = {
					nodeCount: entities.filter((e: any) => e.type === 'node').length,
					regionCount: entities.filter((e: any) => e.type === 'region').length
				};
			}

			sources.push({
				id,
				label: meta.label,
				regions,
				regionStats
			});
		} catch (err) {
			console.error(`Skipping invalid source ${id}`, err);
		}
	}

    sources.sort((a, b) => a.id.localeCompare(b.id));

	const body = JSON.stringify({ sources });
	const etag = `"${await computeEtag(body)}"`;

	const inm = request.headers.get('if-none-match');
	if (inm && inm === etag) {
		return new Response(null, {
			status: 304,
			headers: {
				ETag: etag,
				'Cache-Control': 'public, max-age=0, s-maxage=3600'
			}
		});
	}

	return json(body, {
		status: 200,
		headers: {
			ETag: etag,
			'Cache-Control': 'public, max-age=0, s-maxage=3600'
		}
	});
}

