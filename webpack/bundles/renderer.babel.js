import webpack from "webpack"
import merge from "webpack-merge"
import HtmlPlugin from "html-webpack-plugin"
import HtmlHarddiskPlugin from "html-webpack-harddisk-plugin"
import GoogleFontsPlugin from "google-fonts-webpack-plugin"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import AssetsManifestPlugin from "webpack-assets-manifest"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import fonts from "../../assets/css/fonts.json"
import config, { loaders } from "../config"

const common = [
	"babel-polyfill",
	"./assets/css/app.css",
	"./assets/css/global.css"
]

if(process.argv.indexOf("--hot") !== -1) {
	common.unshift("react-hot-loader/patch")
}

export default merge.smart(config, {
	entry: {
		common,
		main: "./src/windows/main",
		about: "./src/windows/about"
	},
	target: "electron-renderer",
	output: {
		filename: "js/[name].js"
	},
	module: {
		rules: loaders({
			styles: {
				extract: ExtractTextPlugin,
				fallback: "style-loader"
			}
		})
	},
	plugins: [
		...[ "main", "about" ].map(entry => (
			new HtmlPlugin({
				chunks: [ entry, "common" ],
				filename: `${entry}.html`,
				template: "src/index.html",
				alwaysWriteToDisk: true,
				cache: false
			})
		)),
		new HtmlHarddiskPlugin(),
		new webpack.optimize.CommonsChunkPlugin("common"),
		new ExtractTextPlugin({
			filename: "app.css",
			disable: process.env.NODE_ENV === "development"
		}),
		new GoogleFontsPlugin({
			fonts,
			formats: [ "woff2" ],
			local: (process.env.NODE_ENV === "production")
		}),
		new AssetsManifestPlugin({
			output: "manifest.json"
		}),
		new BundleAnalyzerPlugin({
			openAnalyzer: false,
			generateStatsFile: process.env.STATS === "true",
			analyzerMode: process.env.ANALYZER || "disabled",
			analyzerHost: process.env.HOST,
			analyzerPort: process.env.ANALYZER_PORT
		}),
		new webpack.DefinePlugin({
			"process.type": JSON.stringify("renderer")
		})
	]
})
