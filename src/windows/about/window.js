import { app } from "electron"
import createWindow from "../createWindow"

export default function create() {
	const win = createWindow("about", {
		path: "about.html",
		title: `About ${app.getName()}`,
		width: 380,
		height: 550,
		center: true,
		resizable: false
	})
	win.setMenu(null)
	return win
}
