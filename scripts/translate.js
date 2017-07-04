import fs from "fs"
import path from "path"
import globFn from "glob"
import promisify from "util.promisify"
import * as babel from "babel-core"

const context = path.join(__dirname, "..")
const options = { plugins: [ "react-intl" ] }
const glob = promisify(globFn)
const transformFile = promisify(babel.transformFile)
const writeFile = promisify(fs.writeFile)

async function translate(output) {
	const files = await glob("src/**/*.{js,jsx}", { cwd: context })
	const compare = (a, b) => a.file.localeCompare(b.file)
	let messages = await Promise.all(files.map(async (file) => {
		const result = await transformFile(file, options)
		const fileMessages = result.metadata["react-intl"].messages
		return { file, messages: fileMessages }
	}))
	messages = messages.filter(result => result.messages.length)
	messages.sort(compare)
	messages = messages.map(result => result.messages)
	messages = [].concat(...messages)
	const messagesJson = JSON.stringify(messages, null, 2)
	writeFile(output, messagesJson, "utf-8")
}

translate(process.argv[2])
