import { MDBTypography, MDBInput, MDBCard, MDBCardImage, MDBRipple, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit'  //Search Food Recipe app
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchFood = () => {
    const [data, setData] = useState([])   // Render list
    const [text, setText] = useState("")  // this value is used for search 
    const navigate = useNavigate()


    const API_KEY = "cde-y-aAHMJ7zyWXSqBqC8Te-s3S7BjGK2nSYlRzMr8"  //Unpleas image key

    //Fetch api from server
    const fetchData = () => {
        if (!text) {
            alert("Enter some Food recipe!")
        } else {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
                .then(res => res.json())
                .then(result => { setData(result.meals), console.log(result.meals) })
        }

    }


    return (
        <>
            <MDBTypography variant='h3' className='text-muted text-center my-4 fw-bold'>FOOD RECIPE APP</MDBTypography>
           
            {/* main app container */}
            <div className='container w-50 shadow-4 p-3 my-4' >
                <div className='d-flex'>
                    <MDBInput label="Enter Dishes" id="form1" type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <button className='btn btn-primary mx-1' onClick={fetchData}>Search</button>
                </div>


                {/* Card food image display */}
                <div className="row my-4">
                    {
                        data.length === 0 && <p className='lead text-center'>No meals item are avaiable</p>
                    }
                    {
                        data.map((item, i) => (
                            <div key={i} className="col-md-4 my-1">
                                <MDBCard>
                                    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                        <MDBCardImage overlay src={item.strMealThumb} alt='image' width={185.66} height={124.37} style={{ cursor: 'pointer' }} />
                                        <a>
                                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                        </a>
                                    </MDBRipple>
                                    <MDBCardBody>
                                        <MDBCardTitle>{item.strMeal}</MDBCardTitle>                                
                                        <MDBBtn rounded target='_blank' href={item.strSource} color='info' size='sm'>Recipe</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>

                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default SearchFood

