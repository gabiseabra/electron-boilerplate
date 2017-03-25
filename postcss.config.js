const path = require("path")
const variables = require("./assets/css/variables")

module.exports = {
	plugins: {
		"postcss-import": {
			path: [ path.join(__dirname, "assets") ]
		},
		"postcss-url": {},
		"postcss-cssnext": {
			features: {
				customProperties: { variables }
			}
		}
	}
}
