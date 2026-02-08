export function segments(pathname: string) {
    return pathname.split('/').filter(Boolean);
  }
  