import { Engine } from "./engine/engine.js";

const engine = new Engine();

engine.loadModules();

const Hono = engine.app.container.Hono;

export default Hono;
