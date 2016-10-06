module.exports = {
	entry: "./main.jsx",
	output: {
		path: "./",
		filename: "index.js"
	},
	devServer: {
		port: 1111
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'
			}
		]
	}
}
