export default function build() {
	return [
		{
			test: [
				/\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
				/\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				// /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				/\.eot(\?v=\d+\.\d+\.\d+)?$/
			],
			loader: "file-loader",
			options: {
				name: "font/[name].[ext]"
			}
		}
	]
}
