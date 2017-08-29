import React, { PropTypes } from "react"
import { Provider } from "react-redux"
import { IntlProvider } from "react-intl"
import translations from "../../locales/translations"
import globals from "../../lib/globals"
import App from "../../lib/App"

export default class ContextProvider extends React.Component {
	static propTypes = {
		store: PropTypes.object,
		locale: PropTypes.string.isRequired,
		context: PropTypes.string.isRequired,
		children: PropTypes.node.isRequired
	}

	static defaultProps = {
		locale: globals.get("locale"),
		context: globals.get("context")
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
		const { store, locale, children } = this.props
		let component = children
		if(store) {
			component = (<Provider store={store}>{component}</Provider>)
		}
		if(module.hot) {
			const { AppContainer } = require("react-hot-loader")
			component = (<AppContainer>{component}</AppContainer>)
		}
		return (
			<IntlProvider locale={locale} messages={translations[locale]}>
				{component}
			</IntlProvider>
		)
	}
}

export const withAppData = Component => (
	// eslint-disable-next-line
	class extends React.Component {
		static contextTypes = {
			app: PropTypes.instanceOf(App)
		}

		render() {
			const props = this.props
			const { app } = this.context
			return 	<Component {...props} app={app} />
		}
	}
)
