import {  createContext, useState } from "react";

export const ColorContext = createContext()

const ColorContextProvider = ({ children }) => {
    const [flag, setFlag] = useState(false)
    const [show, setShow] = useState(false) //This state is used in Calculator app

    const [showCmpt, setShowCmpt] = useState("") //This state is used for children app [foodweb,media]

    return <ColorContext.Provider value={{ flag, setFlag, show, setShow, showCmpt, setShowCmpt }}>
        {children}
    </ColorContext.Provider>
}

export default ColorContextProvider

