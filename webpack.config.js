const path = require('path');

module.exports = {
  entry: './src/js/gamma.js',
  output: {
    filename: 'gamma.bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: { 
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        } 
      }
    ]
  }
};