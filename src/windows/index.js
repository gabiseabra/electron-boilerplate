import electron from "electron"
import main from "./main/window"
import about from "./about/window"

let options

if(process.type === "renderer") {
	const { remote } = electron
	options = {
		BrowserWindow: remote.BrowserWindow,
		context: remote.getGlobal("buildDir")
	}
} else if(process.type === "browser") {
	options = {
		BrowserWindow: electron.BrowserWindow,
		context: __dirname
	}
}

export default {
	options,
	main() { return main(this.options) },
	about() { return about(this.options) }
}
