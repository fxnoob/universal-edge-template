//base modules
import * as Router from "../modules/Router.js";
import * as Config from "../modules/Config.js";
import * as RouterMiddleware from "../modules/RouterMiddleware.js";
import * as Functions from "../modules/Functions.js";
import * as Pubsub from "../modules/Pubsub.js";
import * as QueueListener from "../modules/Queue-listener.js";
import * as QueueProducer from "../modules/Queue-producer.js";

// feature modules
import * as Health from "../features/health.js";

export const baseModules = [
  { name: "Router", ...Router },
  { name: "Config", ...Config },
  { name: "Functions", ...Functions },
  { name: "RouterMiddleware", ...RouterMiddleware },
  { name: "Pubsub", ...Pubsub },
  { name: "QueueListener", ...QueueListener },
  { name: "QueueProducer", ...QueueProducer },
];

export const featureModules = [
  { name: "Health", ...Health },
];
