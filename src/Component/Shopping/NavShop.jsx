import { Link } from "react-router-dom"

const NavShop = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white border-bottom shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="container">
                    <Link className="navbar-brand" href="#" style={{ fontFamily: "fantasy" }}>
                        <img className="me-2 rounded" src="/shopping/shop.png" alt="image" height={30} />
                        Best Store
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="shopping/home">Home</Link>
                            </li>
                           
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Admin
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="shopping/product">Product</Link></li>
                                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/login">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavShop
