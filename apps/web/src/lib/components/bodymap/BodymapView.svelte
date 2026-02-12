<script lang="ts">
	import { onMount } from 'svelte';
	import { bindBodymapSvg } from './bodymapView.logic';
	import './bodymapView.styles.css';

	import type { BodyEntity, RegionId } from '$lib/types/bodymap';

	export let svgPath: string;
	export let region: RegionId;

	let container: HTMLDivElement | null = null;
	let svgHtml = '';
	let selected: BodyEntity | null = null;

	onMount(async () => {
		const res = await fetch(svgPath);
		svgHtml = await res.text();
	});

	$: (async () => {
		if (!container || !svgHtml) return;

		await bindBodymapSvg(
			container,
			svgHtml,
			region,
			(entity) => (selected = entity)
		);
	})();
</script>

<div class="wrap">
	<div class="svg" bind:this={container}>
		{@html svgHtml}
	</div>

	{#if selected}
		<aside class="panel">
			<button class="close" on:click={() => (selected = null)} aria-label="Close">✕</button>
			<h2>{selected.title}</h2>
			<p>{selected.description}</p>

			{#if selected.tags?.length}
				<div class="tags">
					{#each selected.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			{/if}
		</aside>
	{/if}
</div>
