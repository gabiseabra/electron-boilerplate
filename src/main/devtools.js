import { app } from "electron"
import debug from "electron-debug"
import installExtension, {
	REACT_DEVELOPER_TOOLS,
	REDUX_DEVTOOLS,
	REACT_PERF
} from "electron-devtools-installer"

const installDevtools = forceDownload => 	Promise.all([
	installExtension(REACT_DEVELOPER_TOOLS, forceDownload),
	installExtension(REDUX_DEVTOOLS, forceDownload),
	installExtension(REACT_PERF, forceDownload)
])

export default function init(forceDownload) {
	debug()
	app.once("ready", () => {
		console.log("==> App is running in development mode")
		installDevtools(forceDownload)
	})
}
