import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router } from "react-router-dom"
import { About, Provider } from "../../containers"

ReactDOM.render(
	<Provider>
		<Router>
			<About />
		</Router>
	</Provider>,
	document.getElementById("app")
)

if(module.hot) module.hot.accept()
