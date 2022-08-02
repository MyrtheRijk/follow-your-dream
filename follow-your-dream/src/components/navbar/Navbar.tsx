
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(): JSX.Element {

    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top">
          <div className="container">
            <Link to="/" className="navbar-brand">Follow Your Dream</Link>
            <Link to="#" className="toggle-button">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="navibar">
                <ul className="navbar-nav fw-bold hvr-shutter-out-horizontal">
                  <li className="nav-item active">
                    <Link to="/dreams" className="nav-link">Dreams</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/info" className="nav-link">Info</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/reviews" className="nav-link">Reviews</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    )
}


