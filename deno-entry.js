import { Engine } from "./engine/engine.js";


const engine = new Engine();

engine.loadModules();

const Hono = engine.app.container.Hono;

function logClientInfo(remoteAddr) {
  // console.log({ remoteAddr });
}

async function init() {
  await engine.app.container.Pubsub.init();
  engine.app.container.QueueListener.listen();
  Deno.serve(async (request, connectionInfo) => {
    const env = { sa: logClientInfo(connectionInfo.remoteAddr) };
    const clientIp = connectionInfo?.remoteAddr?.hostname;
    engine.app.container.Pubsub.onChange("ip", clientIp);
    return Hono.fetch(request, env);
  });
}

init().catch((e) => console.log({ e }));
