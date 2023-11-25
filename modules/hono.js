import { Hono } from "hono";

export function service() {
  return new Hono();
}
