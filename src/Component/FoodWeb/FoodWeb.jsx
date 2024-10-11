import { Outlet } from "react-router-dom"
import FoodHeader from "./FoodHeader"
import FooterFood from "./FooterFood"


const FoodWeb = () => {
    return (
        <>
            <FoodHeader />
            <Outlet />
            <FooterFood />
        </>
    )
}

export default FoodWeb