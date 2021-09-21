import { Link } from "react-router-dom";

const MainSearch = ({ UpdateSearchString }) => {
    let onGetSearchString = (e) => {
        UpdateSearchString(e.target.value)
    }
    return (

        <div className="px-0">
            <div className="contacts-list-search input-group">
                <input type="text" className="col-8" placeholder="Search" onChange={onGetSearchString} />
                <Link to="/add-new-contact" className="add-contact col-2 offset-1">Add Contact</Link>
            </div>
        </div>
    )
}

export default MainSearch;
