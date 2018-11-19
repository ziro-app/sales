// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
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
								['transform-imports', {
									'cloudinary-react': {
										'transform': 'cloudinary-react/lib/components/${member}',
										'preventFullImport': true
									}
								}],
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
		config.devServer = { historyApiFallback: true },
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
			// new BundleAnalyzerPlugin(),
			new LodashModuleReplacementPlugin(),
			new CompressionPlugin(),
			new CopyWebpackPlugin([{ from: './_redirects', to: '_redirects', toType: 'file' }]),
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
