import { expect } from 'vitest';

export function expectErrorShape(json: any) {
    expect(json).toBeTruthy();
    expect(json).toHaveProperty('error');
    expect(json.error).toHaveProperty('code');
    expect(typeof json.error.code).toBe('string');
}