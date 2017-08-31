import React from "react"
import PropTypes from "prop-types"
import { AppBar } from "../../shared"
import styles from "./Shell.css"

const Shell = ({ app, children }) => (
	<div className={styles.Shell}>
		<AppBar title={app.title} />
		{children}
	</div>
)

Shell.propTypes = {
	app: PropTypes.object.isRequired,
	children: PropTypes.node
}

export default Shell
