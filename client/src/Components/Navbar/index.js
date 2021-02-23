import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <p className="navbar-brand">Google Books</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/search" className="nav-link" aria-current="page">Search</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/saved" className="nav-link" aria-current="page">Saved</Link>
                        </li>
                    </ul>  
                </div>
            </div>
        </nav>
    );
};

export default Navbar;