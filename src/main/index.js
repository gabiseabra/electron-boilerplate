import { app, Menu } from "electron"
import debug from "electron-debug"
import { setGlobals } from "./globals"
import template from "./menu"
import devtools from "./devtools"
import windows from "../windows"

if(process.env.NODE_ENV === "development") {
	debug()
}

app.once("ready", async () => {
	// Set global vars
	setGlobals()
	// Install dev tools
	if(process.env.NODE_ENV === "development") {
		console.info("==> App running in development mode")
		await devtools(process.env.DL_EXTENSIONS === "true")
	}
	// Open main window
	windows.main()
	// Set application menu
	Menu.setApplicationMenu(
		Menu.buildFromTemplate(template)
	)
})

app.once("activate", () => windows.main())

app.once("window-all-closed", () => { if(process.platform !== "darwin") app.quit() })
