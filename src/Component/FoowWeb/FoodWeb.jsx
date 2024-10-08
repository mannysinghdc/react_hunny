import { Outlet, useLocation } from "react-router-dom"
import FoodHeader from "./FoodHeader"
import FooterFood from "./FooterFood"
import HomeFood from "./HomeFood"


const FoodWeb = () => {
    const location = useLocation()
    return (
        <>
            <FoodHeader />
            {
                location.pathname=="/foodweb" ?<HomeFood/>:null
            }
            <Outlet />
            <FooterFood />
        </>
    )
}

export default FoodWeb