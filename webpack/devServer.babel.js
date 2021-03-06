import merge from "webpack-merge"
import config from "./bundles/renderer.babel"

const HOST = process.env.HOST || "localhost"
const PORT = process.env.DEV_PORT || 8080
const publicPath = `http://${HOST}:${PORT}/`

export default merge(config, {
	output: {
		publicPath
	},
	devServer: {
		host: HOST,
		port: PORT,
		publicPath,
		contentBase: "./build/app",
		compress: true,
		noInfo: true,
		clientLogLevel: "none",
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	}
})
