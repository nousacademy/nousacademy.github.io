import { BASE_URL } from "./env";

export async function get(path: string, headers?: Record<string, string>) {
    const res = await fetch(`${BASE_URL}${path}`, { headers });
    const text = await res.text();
    let json: any = null;

    try {
        json = text ? JSON.parse(text) : null;
    } catch {
        // leave json null
    }

    return { res, text, json };
}