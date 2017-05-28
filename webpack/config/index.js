import path from "path"
import webpack from "webpack"
import merge from "webpack-merge"
import nodeExternals from "webpack-node-externals"
import loadersFn from "./loaders"
import envConfig from "./env"

const context = path.resolve(__dirname, "..", "..")

export default merge.smart({
	context,
	output: {
		path: path.join(context, "build", "app"),
		publicPath: "",
		filename: "[name].js"
	},
	resolve: {
		extensions: [ ".js", ".jsx" ],
		alias: {
			assets: path.join(context, "assets")
		}
	},
	externals: [
		nodeExternals({
			whitelist: [
				/^webpack-dev-server/,
				/^webpack\/hot/,
				/^react-hot-loader/,
				/^react-toolbox/
			]
		})
	],
	plugins: [
		new webpack.EnvironmentPlugin({
			NODE_ENV: "",
			DL_EXTENSIONS: "false",
			HMR: "false"
		})
	]
}, envConfig)

export const loaders = loadersFn.bind(undefined, context)
