import Module from "../../lib/Module"

export default class Main extends Module {
	selectors = {
		counterButton: "button*=Counter"
	}

	async ready() {
		return this.client.waitForVisible(this.selectors.counterButton)
	}
}
