import { Hono } from "hono";

export const name = "Hono";

export const deps = [];

export function service() {
  return new Hono();
}
