import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [data, setData] = useState({ name: "", lastName: "", email: "", password: "" })
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHanlder = (e) => {
        e.preventDefault()
        if (!data.name || !data.lastName || !data.email || !data.password) {
            alert("Please enter all input")
        } else {
            localStorage.setItem("user", JSON.stringify(data))
            navigate("/login")
        }

    }


    return (
        <div className="container">
            <div className="col-md-4 mx-auto mt-4">
                <form onSubmit={submitHanlder}>
                    <h2>Registration Form</h2>
                    <MDBRow className='mb-4'>
                        <MDBCol>
                            <MDBInput label='First name' name='name' value={data.name} onChange={changeHandler} />
                        </MDBCol>
                        <MDBCol>
                            <MDBInput label='Last name' name='lastName' value={data.lastName} onChange={changeHandler} />
                        </MDBCol>
                    </MDBRow>
                    <MDBInput className='mb-4' type='email' name='email' label='Email address' value={data.email} onChange={changeHandler} />
                    <MDBInput className='mb-4' type='password' name='password' label='Password' value={data.password} onChange={changeHandler}>
                    </MDBInput>

                    <MDBCheckbox
                        wrapperClass='d-flex justify-content-center mb-4'
                        id='form3Example5'
                        label='Subscribe to our newsletter'
                        defaultChecked
                    />

                    <MDBBtn type='submit' className='mb-4' block>
                        Sign in
                    </MDBBtn>

                    <div className='text-center'>
                        <p>or sign up with:</p>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn floating color="secondary" className='mx-1'>
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </div>
                </form>
            </div>
        </div>

    );
}