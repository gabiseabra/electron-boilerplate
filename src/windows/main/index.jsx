import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router } from "react-router-dom"
import { Provider } from "../../containers/app"
import { Shell } from "../../containers/views"
import createStore from "../../redux/store"
import createSaga from "../../redux/saga"
import routes from "./routes"

const store = createStore()

store.runSaga(createSaga())

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Shell>{routes}</Shell>
		</Router>
	</Provider>,
	document.getElementById("app")
)

if(module.hot) module.hot.accept()
