import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router } from "react-router-dom"
import { Provider } from "../../containers/app"
import createStore from "../../redux/store"

let task

const store = createStore()

const runSaga = () => {
	const createSaga = require("../../redux/saga").default
	if(task) task.cancel()
	task = store.runSaga(createSaga())
}

const render = () => {
	const { Main } = require("../../containers/windows")
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Main />
			</Router>
		</Provider>,
		document.getElementById("app")
	)
}

render()

runSaga()

if(module.hot) {
	module.hot.accept("../../redux/saga", runSaga)
	module.hot.accept([ "../../containers/windows" ], render)
}
