import { Link } from "react-router-dom";

const NotFound = () => {
    return (

        <div className="container">
            <div className="col-5 mx-auto">
                <div className="card shadow border-0 rounded mt-5 ">
                    <h3 className="card-header display-1 text-muted text-center">
                        404
                    </h3>
                    <span className="card-subtitle mb-2 text-muted text-center">
                        Page Could Not Be Found
                    </span>
                    <div className="card-body mx-auto">
                        <Link to="/" className="btn btn-sm btn-info text-white"> Back To Home </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;