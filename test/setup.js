import "babel-polyfill"
import chai from "chai"
import chaiAsPromised from "chai-as-promised"

chai.use(chaiAsPromised)

global.should = chai.should()
global.expect = chai.expect
