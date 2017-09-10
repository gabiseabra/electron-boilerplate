import { app } from "electron"
import createWindow from "../createWindow"

export default function create() {
	const win = createWindow("main", {
		path: "main.html",
		title: app.getName(),
		minWidth: 400,
		minHeight: 300,
		backgroundColor: "#ffffff",
		center: true
	})
	if(process.env.NODE_ENV === "development") {
		win.webContents.openDevTools()
	}
	return win
}
