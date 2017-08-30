import { all, fork } from "redux-saga/effects"
import { counter } from "./modules/sagas"

export default function create() {
	return function * root() {
		yield all([
			fork(counter)
		])
	}
}
