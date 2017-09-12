import React from "react"
import PropTypes from "prop-types"
import { injectIntl } from "react-intl"
import { Button } from "material-ui"
import AddIcon from "material-ui-icons/Add"
import RemoveIcon from "material-ui-icons/Remove"
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
		<div id="count" className={styles.count + (synched ? " synched" : "")}>{count}</div>
		<div className={styles.controls}>
			<AsyncButton
				id="incr-async"
				fab
				color="primary"
				title={intl.formatMessage(messages.incrementAsync)}
				onClick={() => incrementAsync()}>
				<AddIcon />
			</AsyncButton>
			<Button
				id="incr"
				fab
				title={intl.formatMessage(messages.increment)}
				onClick={() => increment()}>
				<AddIcon />
			</Button>
			<Button
				id="decr"
				fab
				title={intl.formatMessage(messages.decrement)}
				onClick={() => decrement()}>
				<RemoveIcon />
			</Button>
			<AsyncButton
				id="decr-async"
				fab
				color="primary"
				title={intl.formatMessage(messages.decrementAsync)}
				onClick={() => decrementAsync()}>
				<RemoveIcon />
			</AsyncButton>
		</div>
	</div>
)

Counter.propTypes = {
	intl: PropTypes.object.isRequired,
	count: PropTypes.number.isRequired,
	synched: PropTypes.bool.isRequired,
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	incrementAsync: PropTypes.func.isRequired,
	decrementAsync: PropTypes.func.isRequired
}

export default injectIntl(Counter)
