import { Engine } from "./engine/engine.js";


const engine = new Engine();

engine.loadModules();

const Router = engine.app.container.Router;

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
    return Router.fetch(request, env);
  });
}

init().catch((e) => console.log({ e }));
