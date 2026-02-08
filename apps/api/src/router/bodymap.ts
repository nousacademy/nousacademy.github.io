import { segments } from '../utils/path';
import { json, invalidParam, routeNotFound, notFoundEntity } from '../utils/http';
import { requireSource } from '../sources/registry';
import type { RegionId } from '../schema/bodymap.zod';

function parseRegion(url: URL): RegionId | undefined | Response {
  const r = url.searchParams.get('region');
  if (!r) return undefined;
  if (r === 'front' || r === 'back') return r;
  return invalidParam('region', r, ['front', 'back']);
}

export async function handleBodymap(request: Request, url: URL): Promise<Response> {
  const seg = segments(url.pathname);

  if (seg[0] !== 'api' || seg[1] !== 'v1' || seg[2] !== 'bodymap') {
    return routeNotFound(url.pathname);
  }

  // ✅ now async
  const sourceOrErr = await requireSource(url.searchParams);
  if (sourceOrErr instanceof Response) return sourceOrErr;
  const source = sourceOrErr;

  if (request.method === 'GET' && seg.length === 3) {
    const regionOrErr = parseRegion(url);
    if (regionOrErr instanceof Response) return regionOrErr;
    return json(source.getCollection(regionOrErr));
  }

  if (request.method === 'GET' && seg[3] === 'entities' && seg.length === 5) {
    const id = decodeURIComponent(seg[4]);
    const entity = source.getEntity(id);
    if (!entity) return notFoundEntity(id, source.id);
    return json(entity);
  }

  return routeNotFound(url.pathname);
}
