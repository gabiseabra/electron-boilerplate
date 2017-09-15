import React from "react"
import PropTypes from "prop-types"
import { Button } from "material-ui"
import { ExternalLink } from "../../shared"
import styles from "./About.css"

const About = ({ app, versions }) => (
	<div className={styles.About}>
		<img src={require("assets/img/logo.svg")} className={styles.logo} alt={app.productName} />
		<div className={styles.title}>
			<h1>{app.productName}</h1>
			<h2>
				v{app.v.version}
				{app.v.build && `(build ${app.v.build})`}
			</h2>
		</div>
		<div className={styles.description}>
			{app.description && <p>{app.description}</p>}
			{app.copyright && <p>Copyright {app.copyright}</p>}
		</div>
		<dl className={styles.versions}>
			{Object.keys(versions).map(name => (
				<div key={name}>
					<dt>{name}</dt>
					<dd>{versions[name]}</dd>
				</div>
			))}
		</dl>
		<div className={styles.links}>
			{app.homepage &&
				<Button>
					<ExternalLink href={app.homepage}>Website</ExternalLink>
				</Button>}
			{app.bugs &&
				<Button>
					<ExternalLink href={app.bugs}>Found a bug?</ExternalLink>
				</Button>}
		</div>
	</div>
)

About.propTypes = {
	app: PropTypes.object.isRequired,
	versions: PropTypes.objectOf(PropTypes.string).isRequired
}

export default About
