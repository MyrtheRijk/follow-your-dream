import { Link } from "react-router-dom";
import './Navbar.css';
import '../../fonts/Fonts.css';

export default function Navbar(): JSX.Element {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top">
        <div className="container">
          <Link className="navbar-brand text-decoration-none brand-title" to="/">Follow Your Dream</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarCollapse">
            <ul className="navbar-nav mb-2 mb-md-0 ms-auto">
              <li className="nav-item"><Link to="/info" className="nav-link text-dark">Info</Link></li>
              <li className="nav-item"><Link to="/reviews" className="nav-link text-dark">Reviews</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link text-dark">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
