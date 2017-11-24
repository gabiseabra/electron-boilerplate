import path from "path"
import fs from "fs"
import { app, BrowserWindow } from "electron"
import globals from "../main/globals"

/**
 * Create BrowserWindow instance with persistent position and size
 *
 * @export
 * @param {String} name    Window identifier
 * @param {Object} options BrowserWindow options
 * @returns BrowserWindow
 */
export default function createWindow(name, options) {
	const appData = globals.get("app")
	const fileName = path.join(app.getPath("userData"), `${name}.window.json`)
	let state = {}
	try {
		state = fs.readFileSync(fileName, "utf-8")
		state = JSON.parse(state)
	} catch(e) {
		// State file is corrupted
	}
	const win = new BrowserWindow({ ...state, ...options })
	const currentState = () => {
		const [ x, y ] = win.getPosition()
		const [ width, height ] = win.getSize()
		return { x, y, width, height }
	}
	win.on("close", () => {
		if(!win.isMinimized() && !win.isMaximized()) {
			Object.assign(state, currentState())
			const stateJson = JSON.stringify(state)
			fs.writeFileSync(fileName, stateJson, "utf-8")
		}
	})
	// Fix window title on page load
	if(options.title) {
		win.defaultTitle = options.title
		win.webContents.on("did-finish-load", () => {
			win.setTitle(options.title)
		})
	}
	// Load window url
	win.loadURL(appData.url(name, options.path || "/"))
	return win
}
