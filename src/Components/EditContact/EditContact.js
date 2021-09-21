import { Component } from "react";
import { Redirect } from "react-router-dom";

class EditContact extends Component {

    state = {
        Id: this.props.CurrentContact.Id,
        Name: this.props.CurrentContact.Name,
        Phone: this.props.CurrentContact.Phone,
        Email: this.props.CurrentContact.Email,
        Gender: this.props.CurrentContact.Gender,
        Status: this.props.CurrentContact.Status,
        Image: this.props.CurrentContact.Image,
        isRedirect: false
    }

    onGetName = (e) => {
        const name = e.target.value;
        this.setState({
            Name: name
        })
    }
    onGetPhone = (e) => {
        const phone = e.target.value;
        this.setState({
            Phone: phone
        })
    }
    onGetEmail = (e) => {
        const email = e.target.value;
        this.setState({
            Email: email
        })
    }
    onGetStatus = (e) => {
        const status = e.target.value;
        this.setState({
            Status: status
        })
    }
    onGetGender = (e) => {
        const gender = e.target.value;
        this.setState({
            Gender: gender
        })
    }
    onGetImage = (e) => {
        const image = e.target.value;
        this.setState({
            Image: image
        })
    }
    onGetAvatar = (e) => {
        const avatar = e.target.value;
        this.setState({
            Image: avatar
        })
    }

    UpdateContact = (e) => {
        e.preventDefault();
        const { Id, Name, Phone, Email, Gender, Status, Image } = this.state;
        const { onEditContact } = this.props;
        const newContact = {
            Id,
            Name,
            Phone,
            Email,
            Gender,
            Status,
            Image,
        }

        onEditContact(newContact)

        this.setState({
            isRedirect: true
        })
    }

    render() {
        let { Name, Phone, Email, Gender, Status, Image } = this.state;
        let Avatar = this.state.Image;
        let { isRedirect } = this.state;

        if (isRedirect === true) {
            return <Redirect to="/" />
        }

        if (Image === null || Image === "") {
            Image = "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg";
        }
        else {
            Image = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col my-2">
                        <h2>Edit contact</h2>
                    </div>
                </div>
                <div className="row">

                    <div className="col-8">
                        <form onSubmit={this.UpdateContact}>
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input name="Name" type="text" defaultValue={Name} className="form-control" onChange={this.onGetName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Phone">Phone</label>
                                <input name="Phone" type="tel" defaultValue={Phone} className="form-control" onChange={this.onGetPhone} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" defaultValue={Email} className="form-control" onChange={this.onGetEmail} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Gender">Gender</label>
                                <select className="custom-select" defaultValue={Gender} onChange={this.onGetGender} >
                                    <option defaultValue>Choose...</option>
                                    <option value="women">Women</option>
                                    <option value="men">Men</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Status">Status</label>
                                <select className="custom-select" defaultValue={Status} onChange={this.onGetStatus} >
                                    <option defaultValue>Choose...</option>
                                    <option value="Work">Work</option>
                                    <option value="Family">Family</option>
                                    <option value="Private">Private</option>
                                    <option value="Friend">Friend</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Avatar">Avatar</label>
                                <input type="number" min="0" max="99" defaultValue={Avatar} className="form-control" onChange={this.onGetAvatar} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-3">Save</button>
                        </form>
                    </div>
                    <div className="col-4">
                        <img src={Image} className="rounded avatar float-left" alt="..." />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditContact;