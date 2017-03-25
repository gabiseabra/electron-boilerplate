import path from "path"

const defaults = {
	mcss: {
		modules: true,
		importLoaders: 2,
		localIdentName: "[hash:base64:5]"
	},
	url: {
		silent: true
	}
}

if(process.env.NODE_ENV === "development") {
	defaults.mcss.localIdentName = "[name]_[local]--[hash:base64:5]"
}

export default function build(context, opts) {
	const {
		modules,
		extract,
		fallback,
		...options
	} = Object.assign({
		modules: [
			path.join(context, "assets"),
			path.join(context, "src"),
			/react-toolbox/
		]
	}, opts, defaults)
	const condition = {
		include: modules,
		exclude: /global\.\w+$/
	}
	const loaders = [
		{
			test: /\.css$/,
			exclude: condition,
			use: [
				{ loader: "css-loader", options: options.css },
				{ loader: "postcss-loader", options: options.postcss }
			]
		},
		{
			test: /\.css$/,
			include: condition,
			use: [
				{ loader: "css-loader", options: options.mcss },
				{ loader: "postcss-loader", options: options.postcss }
			]
		}
	]
	if(extract) {
		return loaders.map(loader => ({
			...loader,
			use: extract.extract({
				use: loader.use,
				fallback
			})
		}))
	}
	return loaders
}
