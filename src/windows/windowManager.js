export default function windowManager(windows, ...args) {
	const instances = {}
	const getWindow = id => () => {
		if(!instances[id]) {
			if(!windows[id]) throw new Error(`Undefined window "${id}".`)
			const win = windows[id](...args)
			win.on("close", () => { delete instances[id] })
			instances[id] = win
		}
		return instances[id]
	}
	const manager = {}
	Object.keys(windows).forEach((id) => {
		manager[id] = getWindow(id)
	})
	return manager
}
