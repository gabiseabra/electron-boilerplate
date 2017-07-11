import React, { Component } from "react"
import { Button } from "react-toolbox/lib/button"

export default class AsyncButton extends Component {
	state = {
		active: false,
		hover: false
	}

	onMouseEnter = () => this.setState({ hover: true })

	onMouseLeave = () => this.setState({ hover: false })

	render() {
		const icon = (this.state.hover ? "loop" : this.props.icon)
		return (
			<Button
				{...this.props}
				icon={icon}
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave} />
		)
	}
}
