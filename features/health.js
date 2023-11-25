export async function factory(container) {
  const { Hono } = container;

  Hono.get("/health", (c) => c.text("health OK!"));
}

export const initialize = true
