import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit'
import err from '/weather/error.png'

const ErrPage = ({error}) => {

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <MDBCard className='w-75'>
                    <MDBCardBody>
                        <MDBCardTitle>{error}</MDBCardTitle>
                        <img src={err} alt="image" height={200} />
                    </MDBCardBody>
                </MDBCard>
            </div>
        </>
    )
}

export default ErrPage
