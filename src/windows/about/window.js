import path from "path"
import { app } from "electron"
import createWindow from "../createWindow"

export default function create(context) {
	const fileName = path.join(context, "about.html")
	const win = createWindow("about", {
		title: `About ${app.getName()}`,
		width: 380,
		height: 550,
		center: true,
		resizable: false
	})
	win.loadURL(`file://${fileName}`)
	win.setMenu(null)
	return win
}
