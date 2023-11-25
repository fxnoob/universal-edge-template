import { serve } from '@hono/node-server'
import { Engine } from "./engine/engine.js";

const engine = new Engine();

engine.loadModules();

const Hono = engine.app.container.Hono;

serve(Hono, (info) => {
  console.log(`Listening on http://localhost:${info.port}`) // Listening on http://localhost:3000
})
