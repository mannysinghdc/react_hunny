import React, { useContext } from 'react'
import { TodoContext } from '../../../store/Todo-item'

const TodoMsg = () => {
    const { todo } = useContext(TodoContext)
    return (
        <>
            {
                todo.length == 0 && <p className="text-center lead">Enjoy your day</p>
            }
        </>
    )
}

export default TodoMsg
