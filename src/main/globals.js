import { app, remote } from "electron"

export function getGlobal(name) {
	if(process.type === "renderer") {
		return remote.getGlobal(name)
	} else if(process.type === "browser") {
		return global[name]
	}
}

export function setGlobals() {
	global.name = app.getName()
	global.version = app.getVersion()
	global.locale = app.getLocale()
	global.context = app.getAppPath()
	global.buildDir = __dirname
}
