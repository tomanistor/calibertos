const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./static/scripts/main.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: './build'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env']
      }
    },
    {
      test: /\.vue$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'vue-loader',
      options: {
        loaders: {
          // css: ExtractTextPlugin.extract({
          //   use: 'css-loader',
          //   fallback: 'vue-style-loader'
          // }),
          // scss: ExtractTextPlugin.extract({
          //   use: ['css-loader', 'sass-loader?data=@import "./static/styles/scss/global.scss";'],
          //   fallback: 'vue-style-loader'
          // })
          scss: ['css-loader', 'sass-loader?data=@import "./static/styles/scss/global.scss";']
          // scss: ExtractTextPlugin.extract({
          //   use: ['css-loader', {
          //     loader: 'sass-loader',
          //     options: {
          //       data: '@import "./static/styles/scss/global.scss";'
          //     }
          //   }, 'postcss-loader'],
          //   fallback: 'vue-style-loader'
          // })
          // scss: ExtractTextPlugin.extract({
          //   use: ['css-loader', 'sass-loader', {
          //     loader: 'sass-resources-loader',
          //     options: {
          //       resources: path.resolve(__dirname, './static/styles/scss/global.scss')
          //     }
          //   }],
          //   fallback: 'vue-style-loader'
          // }),
          // sass: ExtractTextPlugin.extract({
          //   use: ['css-loader', 'sass-loader?indentedSyntax', {
          //     loader: 'sass-resources-loader',
          //     options: {
          //       resources: path.resolve(__dirname, './static/styles/scss/global.scss')
          //     }
          //   }],
          //   fallback: 'vue-style-loader'
          // })
        }
      }
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 } },
        'postcss-loader'
      ]
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  devServer: {
    port: 3000
  }
}
