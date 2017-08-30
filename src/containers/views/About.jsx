import React from "react"
import PropTypes from "prop-types"
import { About } from "../../components/views"
import { withAppData } from "../app"

const versions = () => ({
	electron: process.versions.electron,
	chrome: process.versions.chrome,
	node: process.versions.node,
	v8: process.versions.v8
})

const AboutPage = ({ app }) => (<About app={app} versions={versions()} />)

AboutPage.propTypes = {
	app: PropTypes.object.isRequired
}

export default withAppData(AboutPage)
