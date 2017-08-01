import fs from "fs"
import path from "path"
import globFn from "glob"
import yargs from "yargs"
import promisify from "util.promisify"
import * as babel from "babel-core"

const context = path.join(__dirname, "..")
const options = { plugins: [ "react-intl" ] }
const glob = promisify(globFn)
const transformFile = promisify(babel.transformFile)
const writeFile = promisify(fs.writeFile)
const argv = yargs
	.option("output", {
		alias: "o",
		describe: "Output directory"
	})
	.option("description", {
		alias: "d",
		default: "descriptions",
		describe: "Descriptions output file name (without extension)."
	})
	.option("language", {
		alias: "l",
		default: "en",
		describe: "Default output language file name (without extension)."
	})
	.demandOption("output", "Please specify an output directory.")
	.help()
	.argv

async function projectDescriptions(cwd) {
	const files = await glob("src/**/*.{js,jsx}", { cwd })
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
	return messages
}

async function translate({ output, description, language }) {
	const messages = await projectDescriptions(context)
	const messagesJson = JSON.stringify(messages, null, 2)
	writeFile(path.join(output, `${description}.json`), messagesJson, "utf-8")
	if(language) {
		const translations = {}
		messages.forEach(({ id, defaultMessage }) => {
			translations[id] = defaultMessage
		})
		const translationJson = JSON.stringify(translations, null, 2)
		writeFile(path.join(output, `${language}.json`), translationJson, "utf-8")
	}
}

translate(argv)
