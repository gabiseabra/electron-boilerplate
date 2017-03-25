import path from "path"

export default function build(context) {
	return [
		{
			test: /\.jsx?$/,
			include: [ path.join(context, "src") ],
			loader: "babel-loader"
		}
	]
}
