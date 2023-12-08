export async function factory(container) {
  const { Router } = container;

  Router.get("/health", (c) => c.text("health OK!"));
}

export const initialize = true
