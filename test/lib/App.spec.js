import path from "path"
import semver from "semver-utils"
import App from "../../src/lib/App"
import pkg from "../../package.json"

describe("App", () => {
	const app = new App(path.join(__dirname, "../../"))

	describe("#version", () => {
		it("returns app version object", () => {
			semver.stringify(app.version).should.equal(pkg.version)
		})
	})
})
