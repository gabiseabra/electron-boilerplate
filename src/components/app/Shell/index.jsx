import React, { PropTypes } from "react"
import GoBack from "../GoBack"
import styles from "./Shell.css"

const Shell = ({ children }) => (
	<div className={styles.App}>
		<GoBack className={styles.nav} />
		{children}
	</div>
)

Shell.propTypes = {
	children: PropTypes.node
}

export default Shell
