import { app, Menu } from "electron"
import globals from "../lib/globals"
import template from "./menu"
import windows from "../windows"

if(process.env.NODE_ENV === "development") {
	require("./devtools").default() // eslint-disable-line global-require
}

app.once("ready", () => {
	globals.set("name", app.getName())
	globals.set("version", app.getVersion())
	globals.set("locale", app.getLocale())
	globals.set("context", app.getAppPath())
	globals.set("buildDir", __dirname)
	windows.main()
	Menu.setApplicationMenu(
		Menu.buildFromTemplate(template)
	)
})

app.once("activate", () => windows.main())

app.once("window-all-closed", () => { if(process.platform !== "darwin") app.quit() })
