//base modules
import * as Hono from "../modules/hono.js";
import * as HonoMiddleware from "../modules/HonoMiddleware.js";

// feature modules
import * as Health from "../features/health.js";

export const baseModules = [
    {name: 'Hono', ...Hono},
    {name: 'HonoMiddleware', ...HonoMiddleware},
];

export const featureModules = [
    {name: 'Health', ...Health},
];
