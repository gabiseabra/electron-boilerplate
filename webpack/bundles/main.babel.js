import webpack from "webpack"
import merge from "webpack-merge"
import config, { loaders } from "../config"

export default merge.smart(config, {
	target: "electron-main",
	entry: [
		"babel-polyfill",
		"./src/main"
	],
	module: {
		rules: loaders()
	},
	node: {
		__dirname: false,
		__filename: false
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.type": JSON.stringify("browser")
		})
	]
})
