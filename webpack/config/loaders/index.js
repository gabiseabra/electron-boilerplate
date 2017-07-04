import fonts from "./fonts"
import images from "./images"
import styles from "./styles"
import scripts from "./scripts"
import json from "./json"

const modules = { fonts, images, styles, scripts, json }

export { fonts, images, styles, scripts, json }

export default function build(context, options = {}) {
	const loaders = []
	Object.keys(modules).forEach(name => {
		if(options[name] === false) {
			return
		}
		const buildModule = modules[name]
		loaders.push(...buildModule(context, options[name] || {}))
	})
	return loaders
}
