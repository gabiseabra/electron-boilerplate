import { remote } from "electron"

export default {
	get(name) {
		return remote.getGlobal(name)
	},
	set() {
		throw new Error("Cannot set global variable from renderer process.")
	}
}
