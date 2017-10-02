var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Main JS file that includes all other modules
  entry: ['./static/scripts/main.js'],
  // Compiled output file
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  module: {
    // Special compilation rules
    loaders: [
      { // JS files
        test: /\.js$/,
        exclude: /node_modules/, // Don't transform node_modules folder
        use: { // Transform with babel-loader
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      { // Vue files
        test: /\.vue$/,
        exclude: /(node_modules|bower_components)/, // Don't transform node_modules folder
        loader: 'vue-loader' // Transform with vue-loader
      }
      // { // CSS files
      //   test: /\.css$/,
      //   exclude: /node_modules/, // Don't transform node_modules folder
      //   loader: ExtractTextPlugin.extract({
      //     loader: 'css-loader?importLoaders=1', // Transform with css-loader
      //   })
      // },
      // { // SCSS files
      //   test: /\.scss$/,
      //   exclude: /node_modules/, // Don't transform node_modules folder
      //   loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) // Transform with css-loader and sass-loader
      // }
    ]
  },
  // plugins: [
  //   new ExtractTextPlugin({ // CSS file destination
  //     filename: './static/styles.bundle.css',
  //     allChunks: true,
  //   }),
  // ],
  devServer: {
    port: 3000
  }
}