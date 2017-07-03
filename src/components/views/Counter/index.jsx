import React, { PropTypes } from "react"
import { Button } from "react-toolbox/lib/button"
import styles from "./Counter.css"

const AsyncButton = (props) => (
	<Button {...props} className={styles.async} />
)

const Counter = ({
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
				alt="Increment Async"
				floating
				primary
				onClick={() => incrementAsync()} />
			<Button
				icon="add"
				alt="Increment"
				floating
				onClick={() => increment()} />
			<Button
				icon="remove"
				alt="Decrement"
				floating
				onClick={() => decrement()} />
			<AsyncButton
				icon="remove"
				alt="Decrement Async"
				floating
				primary
				onClick={() => decrementAsync()} />
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

export default Counter
