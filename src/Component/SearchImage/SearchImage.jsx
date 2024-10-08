import { MDBTypography, MDBInput, MDBCard, MDBCardImage } from 'mdb-react-ui-kit'  //Search image Carousel  app
import { useEffect, useState } from 'react'
import { BiSolidCarousel } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const SearchImage = () => {
    const [data, setData] = useState([])   // Render list
    const [text, setText] = useState("")  // this value is used for search 
    const navigate = useNavigate()


    const API_KEY = "cde-y-aAHMJ7zyWXSqBqC8Te-s3S7BjGK2nSYlRzMr8"  //Unpleas image key

    //Fetch api from server
    const fetchData = () => {
        fetch(`https://api.unsplash.com/search/photos?page=1&query=${text ? text : "general"}&client_id=${API_KEY}`)
            .then(res => res.json())
            .then(result => setData(result.results))
        setText("")
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>

            <MDBTypography variant='h3' className='text-muted text-center my-4 fw-bold'>SEARCH IMAGE APP</MDBTypography>
            <div className='container text-secondary fw-bolder position-fixed' style={{ top: '75px' }}>
                {/* Meal Button */}
                <span title='Meal' style={{ cursor: "pointer", fontSize: "20px" }} onClick={() => navigate("/mealsearch")}> <i className="fa-solid fa-utensils"></i></span>
                {/* Carousel  Button */}
                <span title='Carousel ' style={{ fontSize: "25px", marginInline: "5px", cursor: "pointer" }} onClick={() => navigate("/carousel")}><BiSolidCarousel /></span>
            </div>
            {/* main app container */}
            <div className='container w-50 shadow-4 p-3'>
                <div className='d-flex'>
                    <MDBInput label="Search Image" id="form1" type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <button className='btn btn-primary mx-1' onClick={fetchData}>Search</button>
                </div>

                {/* Card image display */}
                <div className="row my-3">
                    {
                        data.map((item, i) => (
                            <div key={i} className="col-md-4 my-1">

                                <MDBCard className='text-white bg-image hover-overlay'>
                                    <MDBCardImage overlay src={item.urls.full} alt='image' width={185.66} height={124.37} style={{ cursor: 'pointer' }} />
                                    <a>
                                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                    </a>
                                </MDBCard>

                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default SearchImage
