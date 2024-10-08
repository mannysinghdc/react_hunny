import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit'; 
import { useContext, useState } from 'react';
import { TodoContext } from '../../../store/Todo-item'
import { useEffect } from 'react';

const AddTodo = () => {
    const [detail, setDetail] = useState({ name: "", date: "" })
    const { flag, setFlag, todo, setTodo, addTodoData, id } = useContext(TodoContext)



    // ChangeHanlder of input
    // const changeHandler = (e) => {      1st way 
    //     const name = e.target.name
    //     setDetail({ ...detail, [name]: e.target.value })
    // }
    const changeHandler = (e,key) => {                //2nd way 
        setDetail({ ...detail, [key]: e.target.value })
    }

    //add data by form input
    const submitHanlder = (e) => {
        e.preventDefault()
        if (!detail.name || !detail.date) {
            alert("Please enter all detail")
        } else {
            addTodoData(detail)
            alert("New todo craeted")
            setDetail({ name: "", date: "" })

        }
    }

    //Refill data based on id
    const editHandlerId = () => {
        const dt = todo.filter(item => item.id === id)
        // undefine vs ""
        if (id !== "") {
            setDetail({ name: dt[0].name, date: dt[0].date })
        }

    }

    //Update funtionility
    const updateHandler = (e) => {
        e.preventDefault()
        //First Calculate index of id
        const index = todo.map((item) => (
            item.id
        )).indexOf(id)

        if (!detail.name || !detail.date) {
            alert("Please enter all detail")
        } else {
            const updateTodo = [...todo]
            updateTodo[index].name = detail.name
            updateTodo[index].date = detail.date
            setTodo(updateTodo)
            setDetail({ name: "", date: "" })
            setFlag(false)
            alert("Update successfully")
        }

    }

    useEffect(() => {
        editHandlerId()
    }, [id, flag])

    return (
        <>
            <form onSubmit={submitHanlder}>
                <MDBContainer className='mb-3'>
                    <MDBRow>
                        <MDBCol md='6'>
                            <MDBInput label="Add Todo" id="form1" type="text"  value={detail.name} onChange={(e)=>changeHandler(e,"name")} />
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput label="Date" id="form1" type="date" value={detail.date} onChange={(e)=>changeHandler(e,"date")} />
                        </MDBCol>
                        <MDBCol md='2'>
                            {
                                flag ? <MDBBtn size='sm' color='success' onClick={updateHandler}>UPDATE</MDBBtn> : <MDBBtn size='sm'>ADD</MDBBtn>
                            }

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </form>
        </>
    )
}

export default AddTodo
