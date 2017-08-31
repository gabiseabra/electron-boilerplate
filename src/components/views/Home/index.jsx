import React from "react"
import { FormattedMessage } from "react-intl"
import { Link } from "react-router-dom"
import { Button } from "material-ui"
import messages from "./messages"
import styles from "./Home.css"

const Home = () => (
	<div className={styles.Home}>
		<nav className={styles.nav}>
			<Link to="/counter">
				<Button raised color="primary">
					<FormattedMessage {...messages.counter} />
				</Button>
			</Link>
		</nav>
	</div>
)

export default Home
