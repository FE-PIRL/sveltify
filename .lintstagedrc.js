const spec = require('code-specification-unid');

module.exports = {
  '*.{js,jsx,ts,tsx,svelte}': ['eslint packages/sveltify/src --fix', 'prettier --write'],
  '*.{postcss,css,scss,svelte}': ['stylelint packages/sveltify/src --fix', 'prettier --write'],
};
