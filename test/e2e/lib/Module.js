export default class Module {
	constructor(app) {
		this.app = app
		this.modules = this.app.modules
	}

	setup() {
		if(this.selectors) {
			Object.keys(this.selectors).forEach((prop) => {
				// Getter is already defined
				// eslint-disable-next-line no-prototype-builtins
				if(this.hasOwnProperty(prop)) return
				Object.defineProperty(this, prop, {
					get() { return this.client.element(this.selectors[prop]) },
					enumerable: true
				})
			})
		}
	}

	get client() { return this.app.client }
	get electron() { return this.app.electron }
	get remote() { return this.app.remote }

	open() {
		return this.client.appUrl(this.path)
	}
}
