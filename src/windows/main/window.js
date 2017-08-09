import path from "path"
import { app } from "electron"
import createWindow from "../createWindow"

export default function create(context) {
	const fileName = path.join(context, "main.html")
	const win = createWindow("main", {
		title: app.getName(),
		minWidth: 400,
		minHeight: 300,
		backgroundColor: "#ffffff",
		center: true
	})
	win.loadURL(`file://${fileName}`)
	if(process.env.NODE_ENV === "development") {
		win.webContents.openDevTools()
	}
	return win
}
