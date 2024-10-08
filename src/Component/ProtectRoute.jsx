import { Outlet, Navigate } from "react-router-dom"

const ProtectRoute = ({children}) => {
    const loggin = localStorage.getItem("login")
    return (
        <>
            {children}
            {loggin ? <Outlet /> : <Navigate to={"/login"} replace={true} />}
        </>
    )
}

export default ProtectRoute