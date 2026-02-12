import { get } from 'svelte/store';
import { getBodymapCollection } from '$lib/api/bodymap';
import { buildLookups } from '$lib/bodymap/helpers';
import { resetSvg, wireSvg } from '$lib/bodymap/svg';
import { bodymapSource } from '$lib/stores/bodymap';

import type { BodyEntity, RegionId } from '$lib/types/bodymap';

export async function bindBodymapSvg(
	container: HTMLDivElement,
	svgHtml: string,
	region: RegionId,
	onSelect: (entity: BodyEntity) => void
) {
	if (!container || !svgHtml) return;

    const source = get(bodymapSource)

	const collection = await getBodymapCollection(source, region);
	const { byId } = buildLookups(collection);

	resetSvg(container);
	wireSvg(container, byId, { onSelect });
}
