import Application from "../../lib/Application"

describe("counter page", () => {
	let expectedCount = 0
	let app
	let counter
	before(async function () {
		app = new Application()
		counter = app.modules.counter
		await app.start(this)
		await app.ready()
		await counter.navigate()
		await counter.ready()
	})
	after(async function () {
		await app.stop(this)
	})

	it("has a counter", () => (
		counter.getCount().should.eventually.equal(expectedCount)
	))

	describe("increment button", () => {
		it("increases the counter on click", async () => {
			++expectedCount
			await counter.increment.click()
			await counter.getCount().should.eventually.equal(expectedCount)
		})
	})

	describe("decrement button", () => {
		it("decreases the counter on click", async () => {
			--expectedCount
			await counter.decrement.click()
			await counter.getCount().should.eventually.equal(expectedCount)
		})
	})

	describe("increment-async button", () => {
		it("increases the counter on click after 1000ms", async () => {
			await counter.incrementAsync.click()
			await counter.getCount().should.eventually.equal(expectedCount)
			++expectedCount
			await counter.client.pause(1000)
			await counter.getCount().should.eventually.equal(expectedCount)
		})
	})

	describe("decrement-async button", async () => {
		it("decreases the counter on click after 1000ms", async () => {
			await counter.decrementAsync.click()
			await counter.getCount().should.eventually.equal(expectedCount)
			--expectedCount
			await counter.client.pause(1000)
			await counter.getCount().should.eventually.equal(expectedCount)
		})
	})
})
