import path from "path"

export default function build(context) {
	return [
		{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}
	]
}
