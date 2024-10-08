import { createContext, useState } from "react";

export const TextCounterContext = createContext()

const TextCounterContextProvider = ({ children }) => {
    const [text, setText] = useState("")
    const [alert, setAlert] = useState(null)
    const [mode, setMode] = useState("light")  //This state is used in dark and light mode

    //Show alert messge function
    const showAlert = (msg, type) => {
        setAlert({ msg, type })
        setTimeout(() => {
            setAlert(null)
        }, 2000)
    }

    //Bg class removal function
    const removeBgColor = () => {
        document.body.classList.remove("bg-info")
        document.body.classList.remove("bg-success")
    }
    

    return <TextCounterContext.Provider value={{ text, setText, mode, setMode, alert, setAlert, showAlert, removeBgColor }}>
        {children}
    </TextCounterContext.Provider>
}

export default TextCounterContextProvider