import development from "./development"
import production from "./production"

require("dotenv").load()

const env = {
	development,
	production
}

const config = env[process.env.NODE_ENV] || {}

export default config
