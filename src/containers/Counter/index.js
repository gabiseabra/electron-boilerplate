import { connect } from "react-redux"
import { Counter } from "../../components"
import { getCount, isCounterSynched } from "../../redux/selectors"
import * as actions from "../../redux/modules/counter"

const mapper = (state) => ({
	count: getCount(state),
	synched: isCounterSynched(state)
})

export default connect(mapper, {
	increment: actions.increment,
	decrement: actions.decrement,
	incrementAsync: actions.incrementAsync,
	decrementAsync: actions.decrementAsync
})(Counter)
