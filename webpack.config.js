module.exports = {
	// This is the "main" file which should include all other modules
	entry: './src/main.js',
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
			{
				// Check for JS files
				test: /\.js$/,
				// Don't transform node_modules folder
				exclude: /node_modules/,
				// Transform it with babel
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				// Check for Vue files
				test: /\.vue$/,
				// Don't transform node_modules folder
				exclude: /(node_modules|bower_components)/,
				// Transform it with vue
				use: {
					loader: 'vue-loader'
				}
			}
		]
	},
	devServer: {
		port: 3000
	}
}