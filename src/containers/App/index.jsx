import React, { PropTypes } from "react"
import { GoBack } from "../../components"
import styles from "./App.css"

const App = ({ children }) => (
	<div className={styles.App}>
		<GoBack className={styles.nav} />
		{children}
	</div>
)

App.propTypes = {
	children: PropTypes.node
}

export default App
