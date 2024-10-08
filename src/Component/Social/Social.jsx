import { Outlet } from "react-router-dom"  //Social Media app
import Header from "./Header"
import MediaContextProvider from "../../../store/Media-Item"


const Social = () => {
    document.title = "Social App"
    return (
        <>
            <MediaContextProvider>
                <Header />
                <Outlet />
            </MediaContextProvider>
        </>
    )
}

export default Social
