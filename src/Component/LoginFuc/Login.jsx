
import { MDBInput, MDBCol, MDBRow, MDBCheckbox, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useContext, useState } from 'react';
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const loggedUser = JSON.parse(localStorage.getItem("user"))

        if (!data.email || !data.password) {
            alert("Please enter valid email and password")
        } else if (loggedUser === null) {
            alert("No such email is ragistered!")
        } else if (data.email === loggedUser.email && data.password === loggedUser.password) {
            localStorage.setItem("login", true)
            navigate("/")
        } else {
            alert("Wrong email and password")
        }
    }

    return (
        <div className="container mt-4">
            <h2>Login here</h2>
            <div className="col-md-4">
                <form onSubmit={submitHandler}>
                    <MDBInput className='mb-4' type='email' name="email" value={data.email} label='Email address' onChange={changeHandler} />
                    <MDBInput className='mb-4' type='password' name='password' value={data.password} label='Password' onChange={changeHandler} />

                    <MDBRow className='mb-4'>
                        <MDBCol className='d-flex justify-content-center'>
                            <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                        </MDBCol>
                        <MDBCol>
                            <a href='#!'>Forgot password?</a>
                        </MDBCol>
                    </MDBRow>

                    <MDBBtn type='submit' className='mb-4' block>
                        Sign in
                    </MDBBtn>

                    <div className='text-center'>
                        <p>
                            Not a member? <Link to='/signup'>Register</Link>
                        </p>
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

export default Login