import React, { PropTypes } from "react"
import { About } from "../../components"

const AboutPage = (props, { app }) => (
	<About
		app={app}
		icon={require("assets/img/logo.svg")}
		versions={{
			node: process.versions.node,
			chrome: process.versions.chrome,
			electron: process.versions.electron,
			v8: process.versions.v8
		}} />
)

AboutPage.contextTypes = {
	app: PropTypes.object.isRequired
}

export default AboutPage
