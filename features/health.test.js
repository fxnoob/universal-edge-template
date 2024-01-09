import { testClient } from 'hono/testing'

import { Engine } from "../engine/engine.js";


const engine = new Engine();

engine.loadModules();

it('GET /health', async () => {
  const app = engine.app.container.Router
  const res = await testClient(app).health.$get()

  expect(await res.text()).toEqual('health OK!')
})
