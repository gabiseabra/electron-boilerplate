export default function build() {
	return [
		{
			test: /\.(jpe?g|png|gifv?|svg)?$/,
			loader: "file-loader",
			options: {
				name: "img/[name]-[hash:5].[ext]"
			}
		}
	]
}
