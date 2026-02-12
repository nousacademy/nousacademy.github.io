<script lang="ts">
  import { onMount } from 'svelte';
  import { getBodymapCollection } from '$lib/api/bodymap';
  import { buildLookups } from '$lib/bodymap/helpers';
  import { resetSvg, wireSvg } from '$lib/bodymap/svg';
  import { bodymapSource } from '$lib/stores/bodymap';

  import type { BodyEntity } from '$lib/types/bodymap';

  let container: HTMLDivElement | null = null;
  let svgHtml = '';
  let selected: BodyEntity | null = null;

  async function loadSvg(filePath: string) {
    const res = await fetch(filePath);
    svgHtml = await res.text();
  }

  // initial SVG load
  onMount(async () => {
    await loadSvg('/svg/human-body-front.svg');
  });

  // fetch data + bind svg when svg/source/region changes
  $: (async () => {
    if (!container) return;
    if (!svgHtml) return;

    const collection = await getBodymapCollection($bodymapSource, 'front');
    const { byId } = buildLookups(collection);

    resetSvg(container);
    wireSvg(container, byId, {
      onSelect: (e) => (selected = e)
    });
  })();
</script>

<section class="content">
  <div class="svgWrap" bind:this={container}>
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
</section>

<style>
    /* everything in the injected SVG ignores clicks */
    :global(svg *) {
        pointer-events: none;
    }

    /* only node hit targets accept clicks */
    :global(circle, rect) {
        fill: transparent;
        /* stroke-width: 1px;  */
        pointer-events: all;
        cursor: pointer;
    }
</style>
