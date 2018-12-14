// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

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
		const { resellers, backend, sales } = require('./credentials')
		config.devtool = 'cheap-module-eval-source-map'
		config.devServer = { historyApiFallback: true },
		config.plugins.push(
			new webpack.DefinePlugin({
				'process.env': {
					RESELLERS_SHEET_URL: JSON.stringify(resellers),
					BACKEND_URL: JSON.stringify(backend),
					SALES_SHEET_URL: JSON.stringify(sales)
				}
			})
		)
	}
	if (mode === 'production') {
		config.devtool = 'cheap-module-source-map'
		config.plugins.push(
			// new BundleAnalyzerPlugin(),
			new WebpackPwaManifest({
				name: 'Ziro Atendimento',
				short_name: 'Vendas',
				start_url: '/',
				background_color: '#FFF',
				theme_color: '#FFF',
				display: 'standalone',
				icons: [{ src: './logo.png', sizes: [96, 128, 192, 256, 384, 512] }]
			}),
			new LodashModuleReplacementPlugin(),
			new CompressionPlugin(),
			new CopyWebpackPlugin([{ from: './_redirects', to: '_redirects', toType: 'file' }]),
			new webpack.DefinePlugin({
				'process.env': {
					RESELLERS_SHEET_URL: JSON.stringify(process.env.RESELLERS_SHEET_URL),
					BACKEND_URL: JSON.stringify(process.env.BACKEND_URL),
					SALES_SHEET_URL: JSON.stringify(process.env.SALES_SHEET_URL)
				}
			})
		)
	}
	return config
}
