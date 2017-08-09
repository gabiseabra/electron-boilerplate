import path from "path"
import fs from "fs"
import { app, BrowserWindow } from "electron"

export default function createWindow(name, options) {
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
	return win
}
