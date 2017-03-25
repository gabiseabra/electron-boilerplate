import React, { Component, PropTypes } from "react"
import { Provider } from "react-redux"
import { AppContainer } from "react-hot-loader"
import { remote } from "electron"
import App from "../../lib/App"

export default class ContextProvider extends Component {
	static propTypes = {
		store: PropTypes.object,
		// locale: PropTypes.string.isRequired,
		context: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired
	}

	static defaultProps = {
		locale: remote.getGlobal("locale"),
		context: remote.getGlobal("context")
	}

	static childContextTypes = {
		app: PropTypes.instanceOf(App)
	}

	getChildContext() {
		return {
			app: new App(this.props.context)
		}
	}

	render() {
		const { store, children } = this.props
		let component = children
		if(store) {
			component = (<Provider store={store}>{component}</Provider>)
		}
		if(module.hot) {
			component = (<AppContainer>{component}</AppContainer>)
		}
		return component
	}
}
