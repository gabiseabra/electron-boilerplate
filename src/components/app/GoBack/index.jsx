import React from "react"
import { NavLink } from "react-router-dom"
import { Button } from "react-toolbox"

export default function GoBack(props) {
	return (
		<NavLink exact to="/" isActive={match => !match} {...props}>
			<Button icon="arrow_back" floating mini />
		</NavLink>
	)
}
