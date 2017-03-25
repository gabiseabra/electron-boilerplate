import path from "path"

const options = {
	minWidth: 400,
	minHeight: 300,
	backgroundColor: "#ffffff",
	center: true
}

let win

export default function create({ BrowserWindow, context }) {
	if(!win) {
		const fileName = path.join(context, "main.html")
		win = new BrowserWindow(options)
		win.loadURL(`file://${fileName}`)
		if(process.env.NODE_ENV === "development") {
			win.webContents.openDevTools()
		}
	}
	return win
}
