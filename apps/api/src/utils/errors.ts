export type ApiErrorCode =
  | 'missing_param'
  | 'invalid_param'
  | 'not_found'
  | 'route_not_found'
  | 'internal_error';

export type ApiErrorPayload = {
  error: {
    code: ApiErrorCode;
    message: string;
    param?: string;
    value?: unknown;
    allowed?: string[];
    path?: string;
    entity?: string;
    source?: string;
    details?: unknown;
  };
};

export function apiError(
  code: ApiErrorCode,
  message: string,
  extra: Omit<ApiErrorPayload['error'], 'code' | 'message'> = {}
): ApiErrorPayload {
  return {
    error: {
      code,
      message,
      ...extra
    }
  };
}
