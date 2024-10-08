import { createContext, useState } from "react"


export const TodoContext = createContext({
    todo:[],
    addTodoData:()=>{},                            // tjis is called Context Structure
    deleteTodoItem:()=>{}
})

const TodoContextProvider = ({ children }) => {
    const [todo, setTodo] = useState([])
    const [flag, setFlag] = useState(false)
    const [id, setId] = useState("")

    // Create new todo by gatting data from form addTodo input
    const addTodoData = (data) => {
        // const addNewTodo = { id: todo.length, ...data }            // old way
        // setTodo([addNewTodo, ...todo])

        setTodo((curTodo)=>{                                        // This is new way and called functional update
            const addNewTodo = { id: todo.length, ...data }
            const newTodo= [...curTodo,addNewTodo]
            return newTodo
        })
    }

    //Delete funtionility
    const deleteTodoItem = (id) => {
        if (id !== undefined) {
            if (confirm("Are you sure want to delete this todo item?")) {
                const deleteTodo = todo.filter((item) => item.id !== id)
                setTodo(deleteTodo)
            }
        }

    }

    //edit funtionility
    const editTodoItem = (id) => {
        setId(id)
        setFlag(!flag)
    }

    return <TodoContext.Provider value={{ id, todo, setTodo, flag, setFlag, addTodoData, deleteTodoItem, editTodoItem }}>
        {children}
    </TodoContext.Provider>
}

export default TodoContextProvider