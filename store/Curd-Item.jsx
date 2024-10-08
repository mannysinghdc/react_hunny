import { createContext, useState } from "react"

export const CurdContext = createContext({
    data: [],
})

const CurdContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    const [id, setId] = useState("")
    const [flag, setFlag] = useState(false)

    //Select id after clicked on edit button on read cmpt
    const editHandler = (id) => {
        setFlag(true)
        setId(id)
    }


    const addData = (val) => {
        const newData = { id: data.length, ...val }
        setData([...data, newData])
    }

    //Delete
    const deleteHandler = (id) => {
        const deleteData = data.filter(e => e.id !== id)
        if (id !== undefined) {
            if (confirm("Are to sure want to delete this item?")) {
                setData(deleteData)
            }
        }

    }

    return <CurdContext.Provider value={{ data, setData, addData,flag, setFlag, editHandler, deleteHandler, id }}>
        {children}
    </CurdContext.Provider>
}

export default CurdContextProvider