import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { IntlProvider } from "react-intl"
import { MuiThemeProvider } from "material-ui/styles"
import theme from "assets/theme"
import translations from "../../locales/translations"
import globals from "../../main/globals"
import App from "../../lib/App"

export default class ContextProvider extends React.Component {
	static propTypes = {
		store: PropTypes.object,
		locale: PropTypes.string.isRequired,
		context: PropTypes.string.isRequired,
		buildDir: PropTypes.string,
		children: PropTypes.node.isRequired
	}

	static defaultProps = {
		locale: globals.get("locale"),
		context: globals.get("context"),
		buildDir: globals.get("buildDir")
	}

	static childContextTypes = {
		app: PropTypes.instanceOf(App)
	}

	getChildContext() {
		const { context, buildDir } = this.props
		return {
			app: new App(context, buildDir)
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
				<MuiThemeProvider theme={theme}>
					{component}
				</MuiThemeProvider>
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
