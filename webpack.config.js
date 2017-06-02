const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ENV = process.env.NODE_ENV;
const HOT = Boolean(process.env.HOT);
const CHUNK_ORDER = ['hmr', 'shim', 'main'];

const config = {
	context: __dirname,
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			'node_modules'
		],
		extensions: ['.js', '.jsx']
	},
	entry: {
		shim: 'babel-polyfill',
		main: './src/'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[hash].js'
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			},
			{
				test: /\.png$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000
					}
				}
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			}
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(ENV)
		}),
		new CopyWebpackPlugin([
			{ from: 'node_modules/react/dist/', to: 'vendor/js/' },
			{ from: 'node_modules/react-dom/dist/', to: 'vendor/js/' }
		]),
		new HtmlWebpackIncludeAssetsPlugin({
			assets: [
				min('vendor/js/react.js'),
				min('vendor/js/react-dom.js')
			],
			append: false,
			hash: true
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			hash: true,
			chunksSortMode: (chunkA, chunkB) => {
				const a = CHUNK_ORDER.indexOf(chunkA.names[0]);
				const b = CHUNK_ORDER.indexOf(chunkB.names[0]);
				if (a === -1) {
					return 1;
				} else if (b === -1) {
					return -1;
				} else {
					return a - b;
				}
			}
		})
	],
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	}
};

if (ENV === 'development') {
	config.cache = true;
	config.devtool = 'cheap-eval-source-map';

	config.module.rules.push({
		test: /\.css$/,
		use: ['style-loader', 'css-loader']
	});
} else if (ENV === 'production') {
	config.devtool = 'source-map';

	config.plugins.splice(3, 0, new ExtractTextPlugin({
		filename: '[name].[contenthash].css'
	}));

	config.module.rules.push({
		test: /\.css$/,
		use: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: [
				'css-loader',
				{
					loader: 'postcss-loader',
					options: {
						plugins: () => [ autoprefixer ]
					}
				}
			]
		})
	});

	config.plugins.push(new webpack.optimize.UglifyJsPlugin({
		sourceMap: true
	}));
}

if (HOT) {
	config.entry.hmr = [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server'
	];
	config.plugins.unshift(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	);
	config.devServer = {
		hot: true,
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: config.output.publicPath
	};
}

module.exports = config;

function min(path) {
	return ENV === 'production'
		? path.replace(/^(.*?)(\.[a-z]+)$/, (match, file, ext) => file + '.min' + ext)
		: path;
}
