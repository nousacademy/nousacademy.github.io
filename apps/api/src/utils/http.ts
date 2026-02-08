import type { ApiErrorPayload, ApiErrorCode } from './errors';
import { apiError } from './errors';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*'
};

export function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      'content-type': 'application/json; charset=utf-8'
    }
  });
}

export function corsPreflight() {
  return new Response(null, {
    headers: {
      ...CORS_HEADERS,
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

export function errorJson(payload: ApiErrorPayload, status: number) {
  return json(payload, status);
}

// -------- Standard error helpers --------

export function missingParam(param: string) {
  return errorJson(apiError('missing_param', 'Missing required parameter', { param }), 400);
}

export function invalidParam(param: string, value: unknown, allowed?: string[]) {
  return errorJson(
    apiError('invalid_param', `Invalid ${param} parameter`, {
      param,
      value,
      allowed
    }),
    400
  );
}

export function notFoundEntity(entity: string, source?: string) {
  return errorJson(apiError('not_found', 'Entity not found', { entity, source }), 404);
}

export function routeNotFound(path: string) {
  return errorJson(apiError('route_not_found', 'Route not found', { path }), 404);
}

export function internalError(details?: unknown) {
  return errorJson(apiError('internal_error', 'Internal server error', { details }), 500);
}
