import React, { Component } from "react"
import PropTypes from "prop-types"
import Button from "material-ui/Button"
import LoopIcon from "material-ui-icons/Loop"

export default class AsyncButton extends Component {
	static propTypes = {
		children: PropTypes.any
	}

	state = {
		active: false
	}

	onMouseEnter = () => this.setState({ active: true })

	onMouseLeave = () => this.setState({ active: false })

	render() {
		const { children, ...props } = this.props
		return (
			<Button
				{...props}
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}>
				{this.state.active ? <LoopIcon /> : children}
			</Button>
		)
	}
}
