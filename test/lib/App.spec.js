import path from "path"
import App from "../../src/lib/App"
// import pkg from "../../package.json"

describe("App", () => {
	const app = new App(path.join(__dirname, "../../"))

	const getPath = target => path.join(app.buildDir, target)

	it("detects default build directory from package.json", () => {
		app.buildDir.should.equal(path.join(__dirname, "../../build/app"))
	})

	describe("#file()", () => {
		it("returns a file in the application's build directory", () => {
			app.file("foo", "bar").should.contain(getPath("foo/bar"))
		})
	})

	describe("#url()", () => {
		it("returns a url in the application's build directory", () => {
			app.url("/")
				.should.match(/^file:\/\//)
				.and.contain("main.html")
		})

		it("accepts a window name parameter or falls back to main window", () => {
			app.url("test", "/foo").should.contain("test.html#/foo")
			app.url("/bar").should.contain("main.html#/bar")
		})
	})
})
