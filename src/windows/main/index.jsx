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
	const { Shell } = require("../../containers/views")
	const routes = require("./routes").default
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<Shell>{routes}</Shell>
			</Router>
		</Provider>,
		document.getElementById("app")
	)
}

render()

runSaga()

if(module.hot) {
	module.hot.accept("../../redux/saga", runSaga)
	module.hot.accept([ "../../containers/views", "./routes" ], render)
}
