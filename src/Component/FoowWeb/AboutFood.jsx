import { Box } from '@mui/material'
import image from '../../../public/foodWeb.jpg'




const AboutFood = () => {

    return (
        <>
            <div className="container-fluid mb-3" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", height: "100vh", color: "white", display: "flex", justifyContent: "center", alignItems: "left", flexDirection: "column" }}>
                <div className='mx-3' style={{ width: "250px" }}>
                    <h2 className='fw-bolder' style={{ fontFamily: "serif" }}>About Website</h2>
                    <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia fugit aperiam inventore, asperiores sequi sapiente amet rerum cum nisi natus iste deleniti mollitia expedita doloribus vel laborum ipsa, incidunt dolorum.</p>
                </div>
            </div>

         
        </>
    )
}

export default AboutFood