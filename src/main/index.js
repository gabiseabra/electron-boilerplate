// import path from "path"
import { app, Menu } from "electron"
import globals from "./globals"
import template from "./menu"
import windows from "../windows"
import App from "../lib/App"

if(process.env.NODE_ENV === "development") {
	require("./devtools").default() // eslint-disable-line global-require
}

app.once("ready", () => {
	// Always test application in english
	const locale = (process.env.NODE_ENV === "test" ? "en" : app.getLocale())
	const context = app.getAppPath()
	const buildDir = __dirname
	globals.set("name", app.getName())
	globals.set("version", app.getVersion())
	globals.set("locale", locale)
	globals.set("context", context)
	globals.set("buildDir", buildDir)
	globals.set("app", new App(context, buildDir))
	windows.main()
	Menu.setApplicationMenu(
		Menu.buildFromTemplate(template)
	)
})

app.once("activate", () => windows.main())

app.once("window-all-closed", () => { if(process.platform !== "darwin") app.quit() })
