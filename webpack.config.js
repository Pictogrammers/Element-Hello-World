const config = require('@pictogrammers/element-webpack');

module.exports = config({
  port: 3000,
  dist: 'dist',
  watch: [],
  before: (components, mode) => {
    console.log(`${components.length} Components`);
  },
  after: (components, mode) => {
    // Nothing
  }
});