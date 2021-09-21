import ReactDOM from "react-dom";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./index.css";
import APIService from "./Services/APIService"

// Import Components
import Main from "./Components/Main/Main";
import AddContact from "./Components/AddContact/AddContact";
import NotFound from "./Components/NotFound/NotFound";
import NavBar from "./Components/NavBar/NavBar";
import EditContact from "./Components/EditContact/EditContact"

class App extends Component {

  componentDidMount() {
    APIService.fetchContactList().then(currentListData => {
      this.setState({ ContactList: currentListData.List })
    })
  }

  state = {
    ContactList: [
      // {
      //   Id: uuidv4(),
      //   Name: "Anton Karton",
      //   Phone: "+1-800-600-9898",
      //   Email: "ak@gmain.com",
      //   Status: "Work",
      //   Gender: "men",
      //   Image: 0
      // },
      // {
      //   Id: uuidv4(),
      //   Name: "Karton Anton",
      //   Phone: "+1-800-700-9898",
      //   Email: "ka@gmain.com",
      //   Status: "Friends",
      //   Gender: "men",
      //   Image: 1
      // },
      // {
      //   Id: uuidv4(),
      //   Name: "Anna Lee",
      //   Phone: "+1-800-800-9898",
      //   Email: "al@gmain.com",
      //   Status: "Private",
      //   Gender: "women",
      //   Image: 0
      // },
      // {
      //   Id: uuidv4(),
      //   Name: "Olga Verdnam",
      //   Phone: "+1-800-900-9898",
      //   Email: "ov@gmain.com",
      //   Status: "Family",
      //   Gender: "women",
      //   Image: 1
      // }
    ],
    CurrentContact: null,

  }

  onChangeStatus = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id);
    let contact = this.state.ContactList[index];
    switch (contact.Status) {
      case 'Work':
        contact.Status = "Family";
        break;
      case 'Family':
        contact.Status = "Private";
        break;
      case 'Private':
        contact.Status = "Friends";
        break;
      case 'Friends':
        contact.Status = "Work";
        break;
      default:
        console.log(`Error`);
        break;
    }
    const tmpList = this.state.ContactList.slice();
    tmpList[index] = contact;
    this.setState({
      ContactList: tmpList
    })
    APIService.updateDatabse(tmpList);
  }
  onDeleteContact = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id);
    const tmpList = this.state.ContactList.slice();
    tmpList.splice(index, 1);
    this.setState({
      ContactList: tmpList
    })
    APIService.updateDatabse(tmpList);
  }
  onCreateContact = (newContact) => {
    const tmpList = this.state.ContactList.slice();
    newContact.Id = uuidv4();

    tmpList.push(newContact)
    this.setState({
      ContactList: tmpList
    })
    APIService.updateDatabse(tmpList);
  }
  onGetCurrentContact = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id);
    const currentContact = this.state.ContactList[index];
    this.setState({
      CurrentContact: currentContact
    })
  }
  onEditContact = (Contact) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Contact.Id)
    const tmpList = this.state.ContactList.slice();

    tmpList[index] = Contact

    this.setState({ ContactList: tmpList })
    APIService.updateDatabse(tmpList);
  }



  render() {
    const { ContactList, CurrentContact } = this.state;
    return (
      <div className="container bootstrap snippets bootdeys bootdey" >
        <div className="row decor-default rounded">
          <Router>
            <NavBar />
            <Switch>
              <Route path="/" exact render={() => (<Main List={ContactList} onChangeStatus={this.onChangeStatus} onDeleteContact={this.onDeleteContact} onGetCurrentContact={this.onGetCurrentContact} />)} />
              <Route path="/add-new-contact" exact render={() => (<AddContact onCreateContact={this.onCreateContact} />)} />
              <Route path="/edit-contact" exact render={() => (<EditContact CurrentContact={CurrentContact} onEditContact={this.onEditContact} />)} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

