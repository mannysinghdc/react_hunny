import { Outlet } from "react-router-dom"  // This app cmpt use json-server for storing a data as backend...
import NavShop from "./NavShop"
import FootShop from "./FootShop"

const Shopping = () => {
    return (
        <>
            <NavShop />
            <Outlet />
            <FootShop />
        </>
    )
}

export default Shopping