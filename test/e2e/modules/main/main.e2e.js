import Application from "../../lib/Application"

describe("main page", () => {
	let app
	before(async function () {
		app = new Application()
		await app.start(this)
		await app.ready()
	})
	after(async function () {
		await app.stop(this)
	})

	it("displays correct application title", async () => {
		const appTitle = await app.remote.app.getName()
		await app.window.getTitle().should.eventually.equal(appTitle)
	})
})
