import { Component } from "react";

class APIService extends Component {
    URl = "https://contactlist-40f49-default-rtdb.firebaseio.com/contacts.json";

    async fetchContactList() {
        const List = await fetch(this.URl)
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data == null) {
                    return {
                        List: []
                    }
                } else {
                    return {
                        List: data
                    }
                }
            }).catch(err => console.log(err))

        return List;
    }

    updateDatabse = (List) => {
        fetch(this.URl,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(List)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

}

const apiservice = new APIService();
export default apiservice;
