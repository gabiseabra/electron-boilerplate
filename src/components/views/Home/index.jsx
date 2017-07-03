import React, { PropTypes } from "react"
import { Link } from "react-router-dom"
import { Button } from "react-toolbox"
import styles from "./Home.css"

const Home = ({ app }) => (
	<div className={styles.Home}>
		<h1 className={styles.title}>
			{app.title}
		</h1>
		<nav className={styles.nav}>
			<Link to="/counter">
				<Button label="Counter" primary raised />
			</Link>
		</nav>
	</div>
)

Home.propTypes = {
	app: PropTypes.object.isRequired
}

export default Home