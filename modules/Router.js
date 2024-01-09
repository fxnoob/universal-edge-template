import { OpenAPIHono } from '@hono/zod-openapi'

export function service() {
  return new OpenAPIHono();
}
