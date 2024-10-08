import { useDispatch, useSelector } from "react-redux"
import Card from "./Card"
import { useRef } from "react"


const Counter = () => {
    const counter = useSelector((store) => store.counter)
    const show = useSelector((store) => store.show)

    const dispatch = useDispatch()
    const inputElement = useRef()

    const incrementHnadler = () => {
        dispatch({ type: "INCREMENT" })
    }
    const decrementHnadler = () => {
        dispatch({ type: "DECREMENT" })
    }

    const addHandler = () => {
        const inputValue = inputElement.current.value
        dispatch({ type: "ADDITION", payload: { num: inputValue } })
        inputElement.current.value = ""

    }
    const subHandler = () => {
        const inputValue = inputElement.current.value
        dispatch({ type: "SUBSTRACTION", payload: { num: inputValue } })
        inputElement.current.value = ""
    }

    const toggle = () => {
        dispatch({ type: "TOGGLE" })
    }
    return (
        <center>
            <Card>
                <div className="px-4 my-3 text-center">
                    <h2 className="display-5 fw-bold text-body-emphasis">Counter</h2>
                    <div className="col-lg-6 mx-auto">
                        {
                            !show ? <p className="lead mb-4">
                                Counter : {counter}
                            </p>
                                : <p>Hide Counter</p>
                        }

                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-sm btn-primary btn-lg px-4 gap-3" onClick={incrementHnadler}>+1</button>
                            <button type="button" className="btn btn-sm btn-outline-danger btn-lg px-4" onClick={decrementHnadler}>-1</button>
                        </div>
                    </div>
                </div>
                <div className="text-center col-md-7">
                    <div className="my-3 d-flex gap-1">
                        <input type="text" ref={inputElement} className="form-control" placeholder="Enter Number" />
                        <button className="btn btn-info btn-sm" onClick={addHandler}>Add</button>
                        <button className="btn btn-danger btn-sm" onClick={subHandler}>Sub</button>
                    </div>
                </div>
                <button className="btn btn-success btn-sm" onClick={toggle}>Privacy Toggle</button>
            </Card>
        </center>
    )
}

export default Counter
