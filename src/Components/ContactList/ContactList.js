import ContactItem from "./Contactitem/ContactItem";

const ContactList = ({ List, onChangeStatus, onDeleteContact, onGetCurrentContact }) => {
    const item = List.map(listItem => {
        return <ContactItem key={listItem.Id} {...listItem} onChangeStatus={() => onChangeStatus(listItem.Id)} onDeleteContact={() => onDeleteContact(listItem.Id)} onGetCurrentContact={() => onGetCurrentContact(listItem.Id)} />
    })

    return (
        <div>{item.length > 0 ? item : <p className="emptyList">Contact list is empty.</p>}</div>
    )
}

export default ContactList;