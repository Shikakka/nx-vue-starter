"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGlobPatternsForDependencies = void 0;
const generate_globs_1 = require("@nrwl/workspace/src/utilities/generate-globs");
/**
 * generates a set of glob patterns based off the source root of the app and it's dependencies
 * @param dirPath workspace relative directory path that will be used to infer the parent project and dependencies
 * @param fileGlobPattern pass a custom glob pattern to be used
 */
function createGlobPatternsForDependencies(dirPath, fileGlobPattern = '/**/!(*.stories|*.spec).{tsx,jsx,js,vue,css,scss}') {
  return generate_globs_1.createGlobPatternsForDependencies(dirPath, fileGlobPattern);
}
exports.createGlobPatternsForDependencies = createGlobPatternsForDependencies;
//  based on the original NX.dev React function: @nrwl/react/tailwind
