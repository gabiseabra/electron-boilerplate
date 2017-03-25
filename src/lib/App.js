import path from "path"
import fs from "fs"
import semver from "semver-utils"

export default class App {
	constructor(context) {
		const pkgFile = path.join(context, "package.json")
		const pkg = JSON.parse(fs.readFileSync(pkgFile))
		this.context = context
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
}
