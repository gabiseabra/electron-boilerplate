import path from "path"
import fs from "fs"
import semver from "semver-utils"

const getBuildDir = pkg => path.dirname(pkg.main)

export default class App {
	defaultWindow = "main"

	constructor(context, buildDir) {
		const pkgFile = path.join(context, "package.json")
		const pkg = JSON.parse(fs.readFileSync(pkgFile))
		this.context = context
		this.buildDir = buildDir || path.join(context, getBuildDir(pkg))
		this.name = pkg.name
		this.productName = pkg.productName
		this.description = pkg.description
		this.bugs = pkg.bugs
		this.homepage = pkg.homepage
		this.copyright = pkg.copyright
		this.license = pkg.license
		this.version = semver.parse(pkg.version)
		this.title = this.productName
		this.v = this.version
	}

	file(...paths) {
		return path.resolve(this.buildDir, ...paths)
	}

	url(win, targetPath) {
		if(!targetPath) {
			/* eslint-disable no-param-reassign */
			targetPath = win
			win = this.defaultWindow
			/* eslint-enable */
		}
		const fileName = this.file(`${win}.html`).replace(/\\/g, "/")
		const cleanPath = targetPath.replace(/^(\/)+/, "")
		let targetUrl = `${fileName}#/${cleanPath}`
		if(targetUrl.length > 0 && targetUrl.charAt(0) !== "/") {
			targetUrl = `/${targetUrl}`
		}
		return `file://${targetUrl}`
	}
}
