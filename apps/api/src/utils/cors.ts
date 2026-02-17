const ALLOWED_ORIGINS = new Set<string>([
    // Svelte ports
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    // Prod
    'https://nousacademy.github.io',
]);

function pickAllowOrigin(origin: string | null): string | null {
    if (!origin) return null;
    return ALLOWED_ORIGINS.has(origin) ? origin : null;
}

const CORS_BASE_HEADERS: Record<string, string> = {
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, If-None-Match',
    'Access-Control-Expose-Headers': 'ETag',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
};

/**
 * Apply CORS to ANY response, centrally (best place: src/index.ts).
 * If Origin is not allowlisted, we intentionally do NOT set ACAO.
 */
export function applyCors(request: Request, response: Response): Response {
    const origin = request.headers.get('Origin');
    const allowOrigin = pickAllowOrigin(origin);

    // Clone headers so we can safely set/override
    const headers = new Headers(response.headers);

    // Base headers always present (safe)
    for (const [k, v] of Object.entries(CORS_BASE_HEADERS)) headers.set(k, v);

    // Only set ACAO when allowlisted
    if (allowOrigin) headers.set('Access-Control-Allow-Origin', allowOrigin);
    else headers.delete('Access-Control-Allow-Origin');

    // If you ever set "*" somewhere, this ensures it's removed for non-allowed
    // (and also ensures it never leaks).
    if (!allowOrigin && headers.get('Access-Control-Allow-Origin') === '*') {
        headers.delete('Access-Control-Allow-Origin');
    }

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers,
    });
}
