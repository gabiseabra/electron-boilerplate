import React from "react"
import PropTypes from "prop-types"
import { shell } from "electron"

const ExternalLink = ({ href, children, ...props }) => (
	<a
		role="link"
		tabIndex={0}
		onClick={() => shell.openExternal(href)}
		style={{ cursor: "pointer" }}
		{...props}>
		{children}
	</a>
)

ExternalLink.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node
}

export default ExternalLink
