/**
 * Create window manager that handles window instances
 * from a window generator function
 *
 * @param {Object} windows Object of window generator functions
 * @returns {Object}       Object of new window generator functions
 */
export default function windowManager(windows) {
	const instances = {}
	const getWindow = id => () => {
		if(!instances[id]) {
			if(!windows[id]) throw new Error(`Undefined window "${id}".`)
			const win = windows[id]()
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
