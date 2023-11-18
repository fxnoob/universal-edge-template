export const name = "Health";

export const deps = ["Hono"];

export async function factory(container) {
  const { Hono } = container;

  Hono.get("/health", (c) => c.text("health OK!"));
}

export async function init(app) {
  return app.container[name];
}
