import { Link } from "react-router-dom";

export default function GetStartedButton(): JSX.Element {
    return (
        <div>
            <Link to="/dreams">
                <button type="button" className="btn btn-primary btn-lg border-3 fw-bold" data-mdb-ripple-color="dark">
                    Get Started
                </button>
            </Link>
        </div>
    )
}