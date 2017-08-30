import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router } from "react-router-dom"
import { Provider } from "../../containers/app"
import { About } from "../../containers/views"


ReactDOM.render(
	<Provider>
		<Router>
			<About />
		</Router>
	</Provider>,
	document.getElementById("app")
)

if(module.hot) module.hot.accept()
