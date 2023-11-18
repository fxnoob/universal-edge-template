import { Engine } from "./engine/engine.ts";

const engine = new Engine();

engine.loadModules();

const Hono = engine.app.container.Hono;

Deno.serve(Hono.fetch);
