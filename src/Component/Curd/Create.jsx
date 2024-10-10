import { MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import {  useContext, useEffect, useState } from 'react'
import { CurdContext } from '../../../store/Curd-Item'

const Create = () => {
    const [detail, setDetail] = useState({ name: "", email: "", age: "", date: "" })
    const { data, setData, flag, setFlag, addData, id } = useContext(CurdContext) //curd context api

    // ChangeHanlder of input
    const changeHandler = (e) => {
        const name = e.target.name
        setDetail({ ...detail, [name]: e.target.value })
    }
    //Refill data based on id
    const editHandlerId = () => {
        const dt = data.filter(e => e.id === id)
        // console.log(Math.random)
        if (id !== undefined) {
            setDetail({ name: dt[0].name, email: dt[0].email, age: dt[0].age, date: dt[0].date })
        }
    }

    //add data by form input
    const submitHandler = (e, action) => {
        e.preventDefault()
        if (action == "add") {
            addData(detail)
            setDetail({ name: "", email: "", age: "", date: "" })
            alert("Create successfully")
        }
        if (action == "update") {                     // update 
            //First Calculate index of id
            const index = data.map((item) => (
                item.id
            )).indexOf(id)

            if (!detail.name || !detail.email || !detail.age || !detail.date) {
                alert("Please enter all detail")
            } else {
                const updateData = [...data]
                updateData[index].name = detail.name
                updateData[index].email = detail.email
                updateData[index].age = detail.age
                updateData[index].date = detail.date
                setData(updateData)
                setFlag(false)

                alert("Update successfully")
                setDetail({ name: "", email: "", age: "", date: "" })

            }
        }

    }


    console.log(id, flag)
    useEffect(() => {
       if(flag && id !== undefined){
        editHandlerId()
       }
        
        
    }, [id, flag])
    return (
        <>
            <div className="conatiner my-4">
                <h2 className='text-center'>Form</h2>
                <div className="col-md-5 shadow-4 mx-auto">
                    <form onSubmit={(e) => submitHandler(e, 'add')}>
                        <MDBInput label="Name" size="sm" name="name" value={detail.name} type="text" className='mb-2' onChange={changeHandler} />
                        <MDBInput label="Email" size="sm" name='email' value={detail.email} type="text" className='mb-2' onChange={changeHandler} />
                        <MDBInput label="Age" size="sm" name='age' value={detail.age} type="text" className='mb-2' onChange={changeHandler} />
                        <MDBInput label="Date" size="sm" name='date' value={detail.date} type="date" className='mb-2' onChange={changeHandler} />
                        {
                            flag ? <MDBBtn size='sm' className='mx-1' color='success' onClick={(e) => submitHandler(e, 'update')}>Update</MDBBtn> :
                                <MDBBtn size='sm'>Submit</MDBBtn>
                        }

                    </form>
                </div>
            </div>
        </>
    )
}

export default Create
