import { Application as SpectronApplication } from "spectron"
import electron from "electron"
import chaiAsPromised from "chai-as-promised"
import * as modules from "../modules"
import * as commands from "./commands"

export const TIMEOUT = process.env.SPECTRON_TIMEOUT || 10000
export const START_TIMEOUT = process.env.SPECTRON_START_TIMEOUT || TIMEOUT
export const STOP_TIMEOUT = process.env.SPECTRON_STOP_TIMEOUT || TIMEOUT
export const RESTART_TIMEOUT = process.env.SPECTRON_RESTART_TIMEOUT || TIMEOUT * 1.5

const defaults = {
	path: electron,
	args: [ "." ]
}

export default class Application {
	constructor(config) {
		this.config = Object.assign({}, defaults, config)
		this.setupModules()
	}

	setupModules() {
		this.modules = {}
		Object.keys(modules).forEach((name) => {
			const Module = modules[name]
			this.modules[name] = new Module(this)
			this.modules[name].setup()
		})
	}

	get client() { return this.spectron.client }
	get window() { return this.spectron.browserWindow }
	get electron() { return this.spectron.electron }
	get remote() { return this.spectron.electron.remote }

	async start(ctx) {
		if(ctx && ctx.timeout) {
			ctx.timeout(START_TIMEOUT)
		}
		this.spectron = new SpectronApplication(this.config)
		await this.spectron.start()
		// Setup client commands
		Object.keys(commands).forEach((name) => {
			this.client.addCommand(name, commands[name])
		})
		// Setup chai as promised
		chaiAsPromised.transferPromiseness = this.spectron.transferPromiseness
	}

	async stop(ctx) {
		if(ctx && ctx.timeout) {
			ctx.timeout(STOP_TIMEOUT)
		}
		if(this.spectron && this.spectron.isRunning()) {
			await this.spectron.stop()
		}
	}

	restart(ctx) {
		if(ctx && ctx.timeout) {
			ctx.timeout(RESTART_TIMEOUT)
		}
		return this.spectron.restart()
	}

	async ready() {
		return this.client
			.waitUntilWindowLoaded()
			.windowByIndex(0)
			.waitForVisible("#app")
	}
}
