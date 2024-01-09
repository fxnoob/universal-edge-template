export async function factory(container) {
  const { Router } = container;
  /**
   * @openapi
   * /health:
   *   get:
   *     description: Welcome to swagger-jsdoc!
   *     responses:
   *       200:
   *         description: Returns a mysterious string.
   */
  Router.get("/health", (c) => c.text("health OK!"));
}

export const initialize = true
