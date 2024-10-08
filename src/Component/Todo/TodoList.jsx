import { useContext } from "react";
import { TodoContext } from "../../../store/Todo-item";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const { todo } = useContext(TodoContext)

    return (
        <>
            {
                todo.map((item,i) => (
                    <TodoItem key={i} item={item}/>
                ))
            }
        </>

    )
}
export default TodoList