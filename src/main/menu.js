import windows from "../windows"
import globals from "./globals"

const template = [
	{
		role: "edit",
		submenu: [
			{ role: "undo" },
			{ role: "redo" }
		]
	},
	{
		role: "window",
		submenu: [
			{ role: "minimize" },
			{ role: "close" }
		]
	},
	{
		role: "help",
		submenu: [
			{
				label: "About",
				click() { windows.about() }
			}
		]
	}
]

if(process.platform === "darwin") {
	template.unshift({
		label: globals.get("name"),
		submenu: [
			{ role: "about" },
			{ type: "separator" },
			{ role: "services", submenu: [] },
			{ type: "separator" },
			{ role: "hide" },
			{ role: "hideothers" },
			{ role: "unhide" },
			{ type: "separator" },
			{ role: "quit" }
		]
	})
}

export default template
