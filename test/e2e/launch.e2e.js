/* eslint-env mocha */
import Application from "./lib/Application"

describe("application", () => {
	let app
	before(async function () {
		app = new Application()
		await app.start(this)
	})
	after(async function () {
		await app.stop(this)
	})

	it("is visible", async () => {
		await app.window.isVisible().should.eventually.equal(true)
		const { width, height } = await app.window.getBounds()
		width.should.be.above(1)
		height.should.be.above(1)
	})

	it("preserves window state between launches", async function () {
		const width = 600
		const height = 400
		await app.window.setSize(width, height)
		await app.restart(this)
		await app.window.getSize().should.eventually.deep.equal([ width, height ])
	})
})
