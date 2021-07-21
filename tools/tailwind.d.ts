/**
 * generates a set of glob patterns based off the source root of the app and it's dependencies
 * @param dirPath workspace relative directory path that will be used to infer the parent project and dependencies
 * @param fileGlobPattern pass a custom glob pattern to be used
 */
export declare function createGlobPatternsForDependencies(dirPath: string, fileGlobPattern?: string): string[];
