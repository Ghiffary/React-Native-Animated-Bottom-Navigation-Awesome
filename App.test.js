const rewire = require("rewire")
const App = rewire("./App")
const handleLoadingError = App.__get__("handleLoadingError")
// @ponicode
describe("handleLoadingError", () => {
    test("0", () => {
        let callFunction = () => {
            handleLoadingError(429)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            handleLoadingError(404)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            handleLoadingError(400)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            handleLoadingError(500)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            handleLoadingError(200)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            handleLoadingError(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
