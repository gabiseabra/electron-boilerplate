import fonts from "./fonts"
import images from "./images"
import styles from "./styles"
import scripts from "./scripts"
import locales from "./locales"

const modules = { fonts, images, styles, scripts, locales }

export { fonts, images, styles, scripts, locales }

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
