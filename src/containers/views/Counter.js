import { connect } from "react-redux"
import { Counter } from "../../components/views"
import { getCount, isCounterSynched } from "../../redux/selectors"
import * as actions from "../../redux/modules/counter"

const props = state => ({
	count: getCount(state),
	synched: isCounterSynched(state)
})

export default connect(props, {
	increment: actions.increment,
	decrement: actions.decrement,
	incrementAsync: actions.incrementAsync,
	decrementAsync: actions.decrementAsync
})(Counter)
