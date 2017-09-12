import Module from "../../lib/Module"

export default class Main extends Module {
	path = "main.html/"
	selectors = {
		counterButton: "button*=Counter"
	}

	async ready() {
		return this.client.waitForVisible(this.selectors.counterButton)
	}
}
