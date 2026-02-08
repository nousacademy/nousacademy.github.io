export function buildEntityMap<T extends { id?: string }>(items: T[]) {
    return Object.fromEntries(items.map((x) => [x.id, x])) as Record<string, T>;
  }
  