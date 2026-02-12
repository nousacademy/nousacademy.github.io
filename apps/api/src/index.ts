import { corsPreflight, json, routeNotFound, internalError } from './utils/http';
import { handleBodymap } from './router/bodymap';
import { handleSources } from './router/sources';

export default {
  async fetch(request: Request): Promise<Response> {
    try {
      if (request.method === 'OPTIONS') return corsPreflight();

      const url = new URL(request.url);

      if (request.method === 'GET') {
        if (url.pathname === '/api/health') return json({ ok: true });
        if (url.pathname === '/api/v1/sources') return handleSources(request);
      }
      
      if (url.pathname.startsWith('/api/v1/bodymap')) {
        return handleBodymap(request, url);
      }

      return routeNotFound(url.pathname);
    } catch (err) {
      // You can log err later with Workers observability
      return internalError(
        err instanceof Error ? { name: err.name, message: err.message } : err
      );
    }
  }
};
