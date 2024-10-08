import { useContext, useEffect } from "react"
import { NavLink, useLocation, Link } from "react-router-dom"
import DrawerCmpt from "./DrawerCmpt"
import { TextCounterContext } from "../../store/Text-Coounter-Item"
import { ColorContext } from "../../store/Color-Item"
import Logout from "./LoginFuc/Logout"


const Navbar = () => {
    const location = useLocation()
    const { mode, setMode } = useContext(TextCounterContext)  // light and dark mode functionility
    const { setFlag ,setShowCmpt} = useContext(ColorContext)

    const login = localStorage.getItem("login")


    //Dark and light mode
    const modeToggle = () => {
        if (mode == "light") {
            setMode("dark")
        }
        if (mode == "dark") {
            setMode("light")
        }
        if (mode == "light" && location.pathname === "/textcounter") {
            setMode("textBg")
        }
        if (mode == "textBg" && location.pathname === "/textcounter") {
            setMode("light")
        }
    }

    //Dark and light mode
    useEffect(() => {
        document.querySelector("body").className = mode
    }, [mode])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#cbf8f8" }}>
                {/* mui drawer Cmpt */}
                <DrawerCmpt />

                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="/project.webp" className="rounded" alt="image" height={30} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        {
                            login ? <>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className={`nav-link ${location.pathname === "/" ? "active" : null}`} aria-current="page" to="/" onClick={mode == "textBg" ? () => setMode("dark") : ""}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={`nav-link ${location.pathname === "/accordion" ? "active" : null}`} aria-current="page" to="/accordion" onClick={mode == "textBg" ? () => setMode("dark") : ""}>Accordion</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={`nav-link ${location.pathname === "/clock" ? "active" : null}`} aria-current="page" to="clock" onClick={mode == "textBg" ? () => setMode("dark") : ""}>Clock</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={`nav-link ${location.pathname === "/calculator" ? "active" : null}`} aria-current="page" to="calculator" onClick={mode == "textBg" ? () => setMode("dark") : ""}>Calculator</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={`nav-link ${location.pathname === "/counter" ? "active" : null}`} aria-current="page" to="counter" onClick={mode == "textBg" ? () => setMode("dark") : ""}>Counter</NavLink>
                                    </li>
                                    <li className="nav-item" onClick={() => setShowCmpt("foodweb")}>
                                        <NavLink className={`nav-link ${location.pathname === "/foodweb" ? "active" : null}`} aria-current="page" to="/foodweb" onClick={mode == "textBg" ? () => setMode("dark") : ""}>FoodWeb</NavLink>
                                    </li>
                                    <li className="nav-item" onClick={() => setShowCmpt("social")}>
                                        <NavLink className={`nav-link ${location.pathname === "/media" ? "active" : null}`} aria-current="page" to="media" onClick={mode == "textBg" ? () => setMode("dark") : ""}>Social</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={`nav-link ${location.pathname === "/searimage" ? "active" : null}`} aria-current="page" to="searhimage" onClick={mode == "textBg" ? () => setMode("dark") : ""}>SearchImage</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={`nav-link ${location.pathname === "/weather" ? "active" : null}`} aria-current="page" to="weather" onClick={mode == "textBg" ? () => setMode("dark") : ""}>Weather</NavLink>
                                    </li>
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Action
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Profile</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><Link className="dropdown-item" to="/login">Logout</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </>


                                :
                                <div style={{ marginRight: "5px", }}>
                                    <Link className="btn btn-primary btn-sm mx-1" to="/login" role="button">Login</Link>
                                    <Link className="btn btn-primary btn-sm" to="/signUp" role="button">SignUp</Link>
                                </div>
                        }
                        {/* Light & Dark mode Button */}
                        <div onClick={modeToggle}>
                            {
                                <i className={`fa-solid fa-${mode == 'light' ? 'sun' : 'moon'}`} style={{ color: "gray", cursor: 'pointer' }}></i>
                            }

                        </div>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
