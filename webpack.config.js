const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env, { mode }) => {
	const config = {
		module: {
			rules: [
				{
					test: /\.js$/, 
					exclude: /node_modules/, 
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react'
							],
							plugins: [
								'@babel/plugin-transform-runtime',
								'@babel/plugin-proposal-class-properties'
							]
						}
					}
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'raw-loader']
				}
			]
		},
		plugins: [ new HtmlWebpackPlugin({ template: './src/index.html' }) ]
	}
	if (mode === 'development') {
		const { resellers, backend } = require('./credentials')
		config.devtool = 'cheap-module-eval-source-map'
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env': {
					RESELLERS_SHEET_URL: JSON.stringify(resellers),
					BACKEND_URL: JSON.stringify(backend)
				}
			})
		)
	}
	if (mode === 'production') {
		config.devtool = 'cheap-module-source-map'
		config.plugins.push(
			new webpack.optimize.ModuleConcatenationPlugin(),
			new webpack.DefinePlugin({
				'process.env': {
					RESELLERS_SHEET_URL: JSON.stringify(process.env.RESELLERS_SHEET_URL),
					BACKEND_URL: JSON.stringify(process.env.BACKEND_URL)
				}
			})
		)
	}
	return config
}
