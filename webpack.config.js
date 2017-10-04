var ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

module.exports = {
  entry: ['./static/scripts/main.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'vue-loader'
      }
    ]
  },
  devServer: {
    port: 3000
  }
}
