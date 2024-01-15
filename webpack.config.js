const config = require('@pictogrammers/element-webpack');

const bold = (text) => '\x1b[1m' + text + '\x1b[0m';
const green = (text) => '\x1b[32m' + text + '\x1b[0m';

module.exports = config({
  port: 3000,
  dist: 'dist',
  // mode: 'production',
  watch: [],
  before: (components, args, mode) => {
    // Components + GreenText(# of Components)
    console.log('Components', bold(green(components.length)));
  },
  after: (components, args, mode) => {
    // Ran after every compilation
  }
});
