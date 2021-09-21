import SideBarSearch from "./SideBarSearch/SideBarSearch";

const SideBar = ({ CountContacts, WorkCount, FamilyCount, PrivateCount, FriendsCount }) => {
    return (
        <div className="col-3 mr-0">
            <div className="contacts-labels">
                <div className="title">All contacts<span>{CountContacts}</span></div>
                <div className="list">
                    <SideBarSearch />
                    <div className="head">Labels</div>
                    <div className="unit">
                        <div className="lab lab-success text-center pl-0">Work</div><span>{WorkCount}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-primary text-center pl-0">Family</div><span>{FamilyCount}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-danger text-center pl-0">Private</div><span>{PrivateCount}</span>
                    </div>
                    <div className="unit">
                        <div className="lab lab-warning text-center pl-0">Friends</div><span>{FriendsCount}</span>
                    </div>
                    <button type="button" className="btn btn-primary font-weight-700">Add new label</button>
                </div>
            </div>
        </div>
    )
}

export default SideBar;