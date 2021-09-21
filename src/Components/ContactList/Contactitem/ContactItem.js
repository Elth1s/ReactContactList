import { Link } from "react-router-dom";



const ContactItem = ({ Name, Image, Status, Phone, Email, Gender, onChangeStatus, onDeleteContact, onGetCurrentContact }) => {
    let statusBackground;
    switch (Status) {
        case 'Work':
            statusBackground = "lab lab-success";
            break;
        case 'Family':
            statusBackground = "lab lab-primary";
            break;
        case 'Private':
            statusBackground = "lab lab-danger";
            break;
        case 'Friends':
            statusBackground = "lab lab-warning";
            break;
        default:
            console.log(`Sorry, we are out of ${Status}.`);
            break;
    }
    const img = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;
    return (
        <div className="unit">
            <div className="field name">
                <div className="check">
                    <input name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>

                </div>
                <div>
                    <img src={img} alt="avatar" className="avatar" /> <div>{Name}<br /><span onClick={onChangeStatus} className={statusBackground}>{Status}</span></div>
                </div>
            </div>
            <div className="field phone">
                {Phone}
            </div>
            <div className="field email">
                {Email}
            </div>
            <div className="icons">
                <Link to="/edit-contact" className="text-dark"><i className="fas fa-edit h4" onClick={onGetCurrentContact}></i></Link>
                <i onClick={onDeleteContact} className="fas fa-trash h4"></i>
            </div>

        </div>
    )
}
export default ContactItem;

