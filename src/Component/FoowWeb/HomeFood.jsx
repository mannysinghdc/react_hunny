import { Link, useNavigate } from "react-router-dom"

const HomeFood = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="container-fluid mt-4 d-flex">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div>
                            <h3>Food Website</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum error, quidem illum ab odio quos aliquam quisquam maiores aliquid harum quia culpa et consequuntur suscipit animi.</p>
                            <button className="btn btn-primary btn-sm" onClick={()=>navigate("menu")}>Order Now</button>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="my-2 bg-image hover-overlay">
                            <img src="/foodWeb.jpg" className="img-fluid img-thumbnail rounded" alt="image" />
                            <Link to='/foodweb'>
                                <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
                            </Link>
                        </div>
                    </div>
                </div>


            </div> 
        </>
    )
}

export default HomeFood