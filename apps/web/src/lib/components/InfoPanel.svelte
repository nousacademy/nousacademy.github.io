<script lang="ts">
    import type { BodyEntity, BodyNode, BodyRegion } from '$lib/bodymap/types';
  
    export let selected: BodyEntity | null = null;
    export let nodesByKey: Map<string, BodyNode>;
    export let onClose: () => void;
    export let onOpenEntity: (key: string) => void;
  
    const isRegion = (e: BodyEntity): e is BodyRegion => e.type === 'region';
  </script>
  
  {#if selected}
    <aside class="bodymap-panel" role="dialog" aria-label="Info panel">
      <div class="bodymap-panel__header">
        <h2 class="bodymap-panel__title">{selected.title}</h2>
        <button class="bodymap-panel__close" on:click={onClose} aria-label="Close panel">✕</button>
      </div>
  
      {#if selected.tags?.length}
        <div class="bodymap-panel__tags">
          {#each selected.tags as tag}
            <span class="bodymap-tag">{tag}</span>
          {/each}
        </div>
      {/if}
  
      <p class="bodymap-panel__desc">{selected.description}</p>
  
      {#if isRegion(selected)}
        <hr class="bodymap-panel__hr" />
        <h3 class="bodymap-panel__subtitle">Contained nodes</h3>
  
        <ul class="bodymap-panel__list">
          {#each selected.contains as nodeId}
            {#if nodesByKey.get(nodeId)}
              <li>
                <button class="bodymap-link" on:click={() => onOpenEntity(nodeId)}>
                  {nodesByKey.get(nodeId)!.title}
                </button>
              </li>
            {:else}
              <li class="bodymap-muted">{nodeId}</li>
            {/if}
          {/each}
        </ul>
      {/if}
    </aside>
  {/if}
  