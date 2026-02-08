import { corsPreflight, json, routeNotFound, internalError } from './utils/http';
import { handleBodymap } from './router/bodymap';

export default {
  async fetch(request: Request): Promise<Response> {
    try {
      if (request.method === 'OPTIONS') return corsPreflight();

      const url = new URL(request.url);

      if (request.method === 'GET' && url.pathname === '/api/health') {
        return json({ ok: true });
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
