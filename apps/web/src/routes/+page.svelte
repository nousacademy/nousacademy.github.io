<script lang="ts">
    import { onMount, tick } from 'svelte';
    import InfoPanel from '$lib/components/InfoPanel.svelte';
    import { data } from './data'; // your Body
    import { buildLookups, findEntityKeyFromClassList } from '$lib/bodymap/helpers';
    import type { BodyEntity } from '$lib/bodymap/types';
  
    let svgHtml = '';
    let container: HTMLDivElement | null = null;
  
    let selected: BodyEntity | null = null;
  
    const { entitiesByKey, nodesByKey, nodeKeys, regionKeys } = buildLookups((data as any));
  
    function openEntity(key: string) {
      selected = entitiesByKey.get(key) ?? null;
    }
  
    function closePanel() {
      selected = null;
    }
  
    onMount(async () => {
      const res = await fetch('/svg/human-body-front.svg');
      svgHtml = await res.text();
  
      await tick();
      await new Promise((r) => requestAnimationFrame(r));
  
      if (!container) return;
  
      const clickable = container.querySelectorAll<SVGElement>('[class]');
  
      clickable.forEach((el) => {
        const key = findEntityKeyFromClassList(el.classList, nodeKeys, regionKeys);
        if (!key) return;
  
        const record = entitiesByKey.get(key);
        if (!record) return;
  
        // paint nodes only (if you want visible node markers)
        if (record.type === 'node') {
          el.style.fill = 'white';
          el.style.stroke = '#646464';
          el.style.strokeWidth = '1';
        }
  
        el.addEventListener('mouseenter', () => (el.style.opacity = '0.85'));
        el.addEventListener('mouseleave', () => (el.style.opacity = '1'));
        el.addEventListener('click', () => openEntity(key));
      });
    });
  </script>


<!-- <div class="map-container" bind:this={container}>
	{@html svgHtml}
</div> -->

<div class="bodymap-wrap">
    <div bind:this={container}>
      {@html svgHtml}
    </div>
  
    <InfoPanel
      {selected}
      {nodesByKey}
      onClose={closePanel}
      onOpenEntity={openEntity}
    />
  </div>

<style>
	.map-container {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
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
