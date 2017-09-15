import React from "react"
import PropTypes from "prop-types"
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
			{app.homepage && <ExternalLink href={app.homepage}>Website</ExternalLink>}
			{app.bugs && <ExternalLink href={app.bugs.url}>Found a bug?</ExternalLink>}
		</div>
	</div>
)

About.propTypes = {
	app: PropTypes.object.isRequired,
	versions: PropTypes.objectOf(PropTypes.string).isRequired
}

export default About
