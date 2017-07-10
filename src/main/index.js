import { app, Menu } from "electron"
import { setGlobals } from "./globals"
import template from "./menu"
import windows from "../windows"

if(process.env.NODE_ENV === "development") {
	require("./devtools").default()
}

app.once("ready", () => {
	setGlobals()
	windows.main()
	Menu.setApplicationMenu(
		Menu.buildFromTemplate(template)
	)
})

app.once("activate", () => windows.main())

app.once("window-all-closed", () => { if(process.platform !== "darwin") app.quit() })
