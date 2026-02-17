import { routeNotFound, internalError } from './utils/http';
import { handleBodymap } from './router/bodymap';
import { handleSources } from './router/sources';
import { applyCors } from './utils/cors';

export default {
  async fetch(request: Request): Promise<Response> {
    try {
      if (request.method === 'OPTIONS') {
        return applyCors(request, new Response(null, { status: 204 }));
      }

      const url = new URL(request.url);

      let res: Response;

      if (request.method === 'GET') {
        if (url.pathname === '/api/health') {
          res = Response.json({ ok: true });
        } else if (url.pathname === '/api/v1/sources') {
          res = await handleSources(request);
        } else if (url.pathname.startsWith('/api/v1/bodymap')) {
          res = await handleBodymap(request, url);
        } else {
          res = routeNotFound(url.pathname);
        }
      } else {
        res = routeNotFound(url.pathname);
      }

      return applyCors(request, res);
    } catch (err) {
      const res = internalError(
        err instanceof Error ? { name: err.name, message: err.message } : err
      );
      return applyCors(request, res);
    }
  }
};

