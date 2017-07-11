import React, { PropTypes } from "react"
import { Button } from "react-toolbox/lib/button"
import { injectIntl } from "react-intl"
import AsyncButton from "./AsyncButton"
import styles from "./Counter.css"
import messages from "./messages"

const Counter = ({
	intl,
	count,
	synched,
	increment,
	decrement,
	incrementAsync,
	decrementAsync
}) => (
	<div className={styles.Counter}>
		<div className={styles.count + (synched ? " synched" : "")}>{count}</div>
		<div className={styles.controls}>
			<AsyncButton
				icon="add"
				title={intl.formatMessage(messages.incrementAsync)}
				floating
				primary
				onClick={() => incrementAsync()} />
			<Button
				icon="add"
				title={intl.formatMessage(messages.increment)}
				floating
				onClick={() => increment()} />
			<Button
				icon="remove"
				title={intl.formatMessage(messages.decrement)}
				floating
				onClick={() => decrement()} />
			<AsyncButton
				icon="remove"
				title={intl.formatMessage(messages.decrementAsync)}
				floating
				primary
				onClick={() => console.log(decrementAsync())} />
		</div>
	</div>
)

Counter.propTypes = {
	count: PropTypes.number.isRequired,
	synched: PropTypes.bool.isRequired,
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	incrementAsync: PropTypes.func.isRequired,
	decrementAsync: PropTypes.func.isRequired
}

export default injectIntl(Counter)
