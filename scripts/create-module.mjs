#!/usr/bin/env zx

import { join } from "path";
import { baseModules } from "../engine/modules.js";

const moduleName = process.argv[3];

const moduleFilePath = join(__dirname, "../features/", `${moduleName}.js`);

// check if module already exists
const moduleCheck = await $`if test -f ${moduleFilePath}; then
  echo "Module already Exists."
fi`;

// throw error if module already exists
if (moduleCheck.stdout === "Module already Exists.\n") {
  throw new Error("Module already Exists");
}

await $`touch ${moduleFilePath}`;

const moduleBaseContent = `
export function factory(container) {
  const { ${baseModules
    .map((baseMod) => baseMod.name)
    .join(", ")} } = container;
  // write your logic here
  
}

export const initialize = true;
`;

await $`echo ${moduleBaseContent} >> ${moduleFilePath}`;

$`echo Include this module in engine/modules.js`
