const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@containers': 'src/containers',
    '@hoc-helpers': 'src/hoc-helpers',
    '@services': 'src/services',
    '@styles': 'src/styles',
    '@utils': 'src/utils',
  })(config);
  return config;
}