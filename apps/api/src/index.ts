function json(data: unknown, status = 200) {
    return new Response(JSON.stringify(data), {
      status,
      headers: { 'content-type': 'application/json; charset=utf-8' }
    });
  }
  
  export default {
    async fetch(request: Request): Promise<Response> {
      const url = new URL(request.url);
  
      if (url.pathname === '/api/health') {
        return json({ ok: true, env: 'dev' });
      }
  
      if (url.pathname === '/api/bodymap') {
        return json({
          ok: true,
          source: 'worker',
          // later: return SY / Odyssey datasets
        });
      }
  
      return json({ ok: false, error: 'Not found', path: url.pathname }, 404);
    }
  };
  