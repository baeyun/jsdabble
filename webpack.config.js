var path = require('path'),
	webpack = require('webpack');

module.exports = {
	entry: {['webpack/hot/dev-server', path.resolve(__dirname) + '/index.js']},
	
	output: {
		path: path.resolve(__dirname) + '/dist',
		filename: 'bundle.js',
		publicPath: '/dist'
	},

	devServer: {
		contentBase: './src',
		publicPath: '/dist'
	},
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: { presets: ['react', 'es2015'] }
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader']
			}
		]
	},

	plugins: [ new webpack.HotModuleReplacementPlugin() ]
};
