import { MDBContainer, MDBTypography, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import { MdDelete, MdEdit } from "react-icons/md"
import { TodoContext } from '../../../store/Todo-item';
import { useContext } from 'react';

const TodoItem = ({ item }) => {
    const { deleteTodoItem, editTodoItem } = useContext(TodoContext)

    // Capitalize first letter funtion
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <MDBContainer>
            <hr />
            <MDBRow>
                <MDBCol md='6'>
                    <MDBTypography className='text-muted' tag='em'>{capitalizeFirstLetter(item.name)}</MDBTypography>
                </MDBCol>
                <MDBCol md='4'>
                    <MDBTypography className='text-muted' tag='em'> {item.date}</MDBTypography>
                </MDBCol>
                <MDBCol md='2'>
                    <MdDelete title='Delete' className='text-danger fs-3' style={{ cursor: 'pointer' }} onClick={() => deleteTodoItem(item.id)} />
                    <MdEdit title='Edit' className='text-primary fs-3 mx-2' style={{ cursor: 'pointer' }} onClick={() => editTodoItem(item.id)} />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export default TodoItem