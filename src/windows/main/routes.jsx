import React from "react"
import { Route } from "react-router-dom"
import {
	Home,
	Counter
} from "../../containers"

export default [
	<Route exact path="/" component={Home} key="home" />,
	<Route path="/counter" component={Counter} key="counter" />
]
