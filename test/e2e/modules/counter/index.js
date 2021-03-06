import Module from "../../lib/Module"

export default class Counter extends Module {
	selectors = {
		count: "#count",
		increment: "#incr",
		incrementAsync: "#incr-async",
		decrement: "#decr",
		decrementAsync: "#decr-async"
	}

	async navigate() {
		const { main } = this.app.modules
		await main.ready()
		return main.counterButton.click()
	}

	async ready() {
		return this.client.waitForVisible(this.selectors.count)
	}

	async getCount() {
		const count = await this.count.getText()
		return parseInt(count, 10)
	}
}
