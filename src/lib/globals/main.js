export default {
	get(name) {
		return global[name]
	},
	set(name, value) {
		global[name] = value
	}
}
