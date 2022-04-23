const config = require('@pictogrammers/element-webpack');

module.exports = config({
  port: 3000,
  dist: 'dist',
  watch: [],
  before: (components, mode) => {
    // Components + GreenText(# of Components)
    console.log('Components \x1b[32m%s\x1b[0m', components.length);
  },
  after: (components, mode) => {
    // Ran after every compilation
  }
});