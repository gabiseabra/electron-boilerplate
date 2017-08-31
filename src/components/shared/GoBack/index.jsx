import React from "react"
import { NavLink } from "react-router-dom"
import { IconButton } from "material-ui"
import ArrowBackIcon from "material-ui-icons/ArrowBack"

export default function GoBack(props) {
	return (
		<NavLink exact to="/" isActive={match => !match} {...props}>
			<IconButton color="contrast" aria-label="go back">
				<ArrowBackIcon />
			</IconButton>
		</NavLink>
	)
}
