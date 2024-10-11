import { Link } from '@mui/material';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()

    const logoutHandler = () => {
        localStorage.removeItem("login");
        navigate("/login")
    }
    return (
        <div className='d-flex'>
            {
                user ? <p className='text-danger px-4'>Name: {user.name}</p> : null
            }
            {user && <MDBDropdown style={{ marginRight: "5px", marginTop: "5px" }}>
                <MDBDropdownToggle size="sm">Log out</MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem link>Profile</MDBDropdownItem>
                    <MDBDropdownItem link>
                        <Link className="sidenav-link ripple-surface ripple-surface-primary" underline="none" tabIndex="1" onClick={logoutHandler}> <i className="fas fa-user-astronaut pr-3"></i>Log out</Link>
                    </MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            }

        </div>
    );
}

export default Logout

