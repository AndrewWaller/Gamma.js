const path = require('path');

module.exports = {
  entry: './src/js/gamma.js',
  output: {
    filename: 'gamma.bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  watch: true
};