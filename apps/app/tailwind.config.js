/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require('path');
const { createGlobPatternsForDependencies } = require('./../../tools/tailwind');

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  purge: [
    join(__dirname, '**/*.{js,ts,jsx,tsx,vue,scss,css}'),
    ...createGlobPatternsForDependencies(__dirname),
  ]
};
