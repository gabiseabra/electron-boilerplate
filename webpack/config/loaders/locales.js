import path from "path"

export default function build(context) {
	return [
		{
			test: /\.json$/,
			include: [ path.join(context, "src", "locales") ],
			loader: "file-loader"
		}
	]
}
