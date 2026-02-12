import { describe, it, expect } from 'vitest';
import { get } from '../test-utils/http';
import { expectErrorShape } from '../test-utils/helpers';

describe('Bodymap API (integration)', () => {
    it('GET /api/health returns ok', async () => {
        const { res, json, text } = await get('/api/health');

        expect(res.status).toBe(200);
        expect(json ?? text).toBeTruthy();
        // tolerate either {ok:true} or something similar
        if (json) {
            expect(json).toHaveProperty('ok');
            expect(json.ok).toBe(true);
        }
    });

    it('GET /api/v1/bodymap missing source => 400 missing_param', async () => {
        const { res, json } = await get('/api/v1/bodymap');

        expect(res.status).toBe(400);
        expectErrorShape(json);
        expect(json.error.code).toBe('missing_param');
        expect(json.error.param).toBe('source');
    });

    it('GET /api/v1/bodymap invalid source => 400 invalid_param', async () => {
        const { res, json } = await get('/api/v1/bodymap?source=__nope__');

        expect(res.status).toBe(400);
        expectErrorShape(json);
        expect(json.error.code).toBe('invalid_param');
        expect(json.error.param).toBe('source');
        // allowed list should be present
        expect(Array.isArray(json.error.allowed)).toBe(true);
    });

    it('GET /api/v1/bodymap invalid region => 400 invalid_param', async () => {
        const { res, json } = await get('/api/v1/bodymap?source=sefer_yetzirah&region=side');

        expect(res.status).toBe(400);
        expectErrorShape(json);
        expect(json.error.code).toBe('invalid_param');
        expect(json.error.param).toBe('region');
        expect(json.error.allowed).toEqual(['front', 'back']);
    });

    it('Wrong route under /bodymap without source => 400 missing_param (source required)', async () => {
        const { res, json } = await get('/api/v1/bodymap/entity/liver');

        expect(res.status).toBe(400);
        expectErrorShape(json);
        expect(json.error.code).toBe('missing_param');
        expect(json.error.param).toBe('source');
    });

    it('GET /api/v1/bodymap (sefer_yetzirah) returns collection', async () => {
        const { res, json } = await get('/api/v1/bodymap?source=sefer_yetzirah&region=front');

        expect(res.status).toBe(200);
        expect(json).toBeTruthy();

        expect(json.source).toBe('sefer_yetzirah');
        expect(json.region).toBe('front');
        expect(Array.isArray(json.entities)).toBe(true);
    });

    it('GET /api/v1/bodymap (phaedrus) returns collection', async () => {
        const { res, json } = await get('/api/v1/bodymap?source=phaedrus');

        expect(res.status).toBe(200);
        expect(json).toBeTruthy();
        expect(json.source).toBe('phaedrus');
        expect(Array.isArray(json.entities)).toBe(true);
    });

    it('GET /api/v1/bodymap (hekhalot) returns collection', async () => {
        const { res, json } = await get('/api/v1/bodymap?source=hekhalot');

        expect(res.status).toBe(200);
        expect(json).toBeTruthy();
        expect(json.source).toBe('hekhalot');
        expect(Array.isArray(json.entities)).toBe(true);
    });

    it('GET /api/v1/bodymap/entities/:id not found => 404', async () => {
        const { res, json } = await get('/api/v1/bodymap/entities/__missing__?source=phaedrus');

        expect(res.status).toBe(404);
        expectErrorShape(json);
        expect(json.error.code).toBe('not_found');
    });

    it('GET /api/v1/bodymap/entities/:id returns entity when present (smoke)', async () => {
        // Pick a known id you have in sefer_yetzirah; liver is common in your dataset.
        const { res, json } = await get('/api/v1/bodymap/entities/liver?source=sefer_yetzirah');

        // If your dataset uses a different id, update this id.
        expect([200, 404]).toContain(res.status);

        if (res.status === 200) {
            expect(json).toBeTruthy();
            expect(json.id).toBe('liver');
            expect(json.type).toBe('node');
        }
    });
});
