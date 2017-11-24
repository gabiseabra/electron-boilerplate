import isRenderer from "is-electron-renderer"

if(isRenderer) {
	module.exports = require("./renderer").default
} else {
	module.exports = require("./main").default
}
