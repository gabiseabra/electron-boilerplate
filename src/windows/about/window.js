import path from "path"

const options = {
	width: 380,
	height: 550,
	center: true,
	resizable: false
}

let win

export default function create({ BrowserWindow, context }) {
	if(!win) {
		const fileName = path.join(context, "about.html")
		win = new BrowserWindow(options)
		win.loadURL(`file://${fileName}`)
		win.setMenu(null)
		win.on("closed", () => { win = null })
	}
	win.focus()
	return win
}
