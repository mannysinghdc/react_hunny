
import TodoContextProvider from "../../../store/Todo-item";
import AddTodo from "./AddTodo";
import TodoContainer from "./TodoContainer"
import TodoList from "./TodoList"
import { MDBTypography } from 'mdb-react-ui-kit';
import TodoMsg from "./TodoMsg";


const Todo = () => {
    document.title = "Todo App"
    return (
        <>
            <figure className='text-center my-4'>
                <MDBTypography className='text-muted' variant='h2' tag='em'>Todo App</MDBTypography>
            </figure>
            <TodoContextProvider>
                <TodoContainer>
                    <AddTodo />
                    <TodoMsg />
                    <TodoList />
                </TodoContainer>
            </TodoContextProvider>
        </>
    )
}

export default Todo
