import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="col navbar navbar-expand-lg navbar-dark rounded-top main-navbar">
            <Link className="navbar-brand" to="/">Contact list</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
