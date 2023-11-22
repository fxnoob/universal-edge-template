import Bottle from "bottlejs";

import { baseModules, featureModules } from "./modules.js";

export class Engine {
  [x: string]: any;
  constructor() {
    this.app = new Bottle();
  }
  loadModules() {
    const modules = [...baseModules, ...featureModules];
    for (const module of modules) {
      if (!module.name) {
        throw new Error(
          "On loading services, we found that Service name is not defined.",
        );
      }
      if (this.app.container[module.name]) {
        throw new Error(
          `Same name service already exists. Conflicting name: ${module.name}`,
        );
      }
      const deps = module.deps ? module.deps : [];
      if (module.service) {
        this.app.service(module.name, module.service, ...deps);
      }
      if (module.factoryService) {
        this.app.serviceFactory(module.name, module.factoryService, ...deps);
      }
      if (module.factory) {
        this.app.factory(module.name, module.factory);
      }
    }
    for (const module of modules) {
      if (module.init) {
        module.init(this.app);
      }
    }
  }
}
