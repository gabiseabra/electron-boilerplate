import React from "react"
import { Switch, Route } from "react-router-dom"
import {
	Home,
	Counter,
	Shell
} from "../views"

export default function MainWindow() {
	return (
		<Shell>
			<Switch>
				<Route exact path="/" component={Home} key="home" />
				<Route exact path="/counter" component={Counter} key="counter" />
			</Switch>
		</Shell>
	)
}
