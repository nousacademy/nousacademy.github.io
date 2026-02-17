<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';

	import type { SourceItem } from '$lib/types/sources';
	import { fetchSources, getSelectedSource, setSourceInUrl } from './header.logic';
	import './header.styles.css';

	let sources: SourceItem[] = [];
	let loading = true;

	$: selected = getSelectedSource($page.url);

	onMount(async () => {
		try {
			const json = await fetchSources();
			sources = json.sources ?? [];
		} finally {
			loading = false;
		}
	});

	function onChange(e: Event) {
		const source = (e.target as HTMLSelectElement).value;
		setSourceInUrl(get(page), source);
	}
</script>

<header class="header site-header">
	<div class="left">
		<a href="/" class="logo">
			<img src="img/i-exist.jpg" alt="I Exist Logo" />
		</a>
	</div>

    <nav class="center">
		<!-- <a href="/map/front">Front</a>
	  <a href="/map/back">Back</a> -->
	</nav>

	<div class="controls right">
		<div class="label">Knowledge set</div>

		{#if loading}
			<select class="select" disabled>
				<option>Loading…</option>
			</select>
		{:else}
			<select class="select" on:change={onChange} bind:value={selected}>
				<option value="" disabled>Select…</option>
				{#each sources as s}
					<option value={s.id}>{s.label}</option>
				{/each}
			</select>
		{/if}
	</div>
</header>
