<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/bodymap.css';
	import { bodymapSource } from '$lib/stores/bodymap';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header class="site-header">
	<div class="left">
		<a href="/" class="logo">
			<img src="img/i-exist.jpg" alt="I Exist Logo" />
		</a>
	</div>

	<nav class="center">
		<!-- <a href="/map/front">Front</a>
	  <a href="/map/back">Back</a> -->
	</nav>

	<div class="right">
		<label for="knowledge-set" class="sr-only"> Knowledge set </label>

		<select id="knowledge-set" class="knowledge-select" bind:value={$bodymapSource} aria-label="Select source">
			<option value="sefer_yetzirah">Sefer Yetzirah</option>
			<option value="phaedrus">Phaedrus</option>
			<option value="hekhalot">Hekhalot</option>
		</select>
	</div>
</header>

<main class="site-main">
	{@render children()}
</main>

<footer class="site-footer">
	<small>
		© {new Date().getFullYear()} Nous Academy · An atlas of symbolic anatomy
	</small>
</footer>

<style>
	.site-header,
	.site-footer {
		font-family:
			'Roboto',
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			sans-serif;

		font-size: 0.875rem; /* MUI default-ish */
	}
	.site-header {
		position: sticky;
		top: 0;
		z-index: 100;
		height: 56px;
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		padding: 0 1rem;
		background: white;
		border-bottom: 1px solid #eee;
	}

	.logo img {
		height: 50px;
		border-radius: 50%;
	}

	.knowledge-select {
		font-weight: 400;
		padding: 6px 10px;
		border-radius: 4px;
		border: none;
    	background: yellow;
	}

	.center a {
		margin: 0 0.75rem;
		text-decoration: none;
	}

	.site-main {
		min-height: calc(100vh - 96px);
	}

	.site-footer {
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1px solid #eee;
	}
</style>
