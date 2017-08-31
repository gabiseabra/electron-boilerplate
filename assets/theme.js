const { deepPurple, pink } = require("material-ui/colors")
const { createMuiTheme } = require("material-ui/styles")

module.exports = createMuiTheme({
	palette: {
		primary: deepPurple,
		secondary: pink
	}
})
