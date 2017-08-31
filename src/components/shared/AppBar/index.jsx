import React from "react"
import PropTypes from "prop-types"
import {
	AppBar as AppBarComponent,
	Toolbar,
	Typography
} from "material-ui"
import GoBack from "../GoBack"

const AppBar = ({ title, children }) => (
	<AppBarComponent position="static">
		<Toolbar disableGutters>
			<GoBack />
			<Typography type="title" color="inherit">
				{title}
			</Typography>
			{children}
		</Toolbar>
	</AppBarComponent>
)

AppBar.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node
}

export default AppBar
