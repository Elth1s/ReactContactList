import { Component } from "react";
import { Redirect } from "react-router-dom";

class AddContact extends Component {
    state = {
        Name: "",
        Image: null,
        Phone: "",
        Email: "",
        Status: "",
        Gender: "",
        isRedirect: false
    }
    onGetName = (e) => {
        const name = e.target.value;
        this.setState({
            Name: name
        })
    }

    onGetAvatar = (e) => {
        const avatar = e.target.value;
        this.setState({
            Image: avatar
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

    onGetGender = (e) => {
        const gender = e.target.value;
        this.setState({
            Gender: gender
        })
    }

    onGetStatus = (e) => {
        const status = e.target.value;
        this.setState({
            Status: status
        })
    }


    CreateContact = (e) => {
        e.preventDefault();
        const { Name, Phone, Email, Gender, Status, Image } = this.state;
        const newContact = {
            Name,
            Phone,
            Email,
            Gender,
            Status,
            Image,
        }
        this.props.onCreateContact(newContact)

        this.setState({
            isRedirect: true
        })
    }


    render() {
        let { Image, Gender, isRedirect } = this.state;

        if (isRedirect === true) {
            return <Redirect to="/" />
        }

        if (Image === null || Image === "") {
            Image = "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg";
        }
        else {
            Image = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;;
        }

        return (
            <div className="container text-color-purple">
                <div className="row">
                    <div className="col my-2">
                        <h2>Add contact</h2>
                    </div>
                </div>
                <div className="row">

                    <div className="col-8">
                        <form onSubmit={this.CreateContact}>
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input name="Name" type="text" className="form-control" onChange={this.onGetName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Phone">Phone</label>
                                <input name="Phone" type="tel" className="form-control" onChange={this.onGetPhone} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" onChange={this.onGetEmail} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Gender">Gender</label>
                                <select className="custom-select" onChange={this.onGetGender} >
                                    <option defaultValue>Choose...</option>
                                    <option value="women">Women</option>
                                    <option value="men">Men</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Status">Status</label>
                                <select className="custom-select" onChange={this.onGetStatus} >
                                    <option defaultValue>Choose...</option>
                                    <option value="Work">Work</option>
                                    <option value="Family">Family</option>
                                    <option value="Private">Private</option>
                                    <option value="Friend">Friend</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Avatar">Avatar</label>
                                <input type="number" min="0" max="99" className="form-control" onChange={this.onGetAvatar} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-3">Add new</button>
                        </form>
                    </div>
                    <div className="col-4">
                        <img src={Image} className="rounded addContactImg float-left" alt="..." />
                    </div>
                </div>
            </div>
        );
    }
}

export default AddContact;