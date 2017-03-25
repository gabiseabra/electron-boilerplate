import installExtension, {
	REACT_DEVELOPER_TOOLS,
	REDUX_DEVTOOLS,
	REACT_PERF
} from "electron-devtools-installer"

export default async function install(forceDownload) {
	await Promise.all([
		installExtension(REACT_DEVELOPER_TOOLS, forceDownload),
		installExtension(REDUX_DEVTOOLS, forceDownload),
		installExtension(REACT_PERF, forceDownload)
	])
}
