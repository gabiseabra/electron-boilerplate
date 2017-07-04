export default function build() {
	return [
		{
			test: /\.json$/,
			loader: "json-loader"
		}
	]
}
