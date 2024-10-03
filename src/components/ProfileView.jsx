import { useContext } from "react"
import { ContactContext } from "../App"
import { useParams } from "react-router-dom";

export function ProfileView() {
    const { id } = useParams(); // Get the contact ID from the URL
    const { contacts } = useContext(ContactContext); // Access the contacts from context

    // Find the contact by ID
        const contact = contacts.find(c => c.id === parseInt(id));
    console.log(contacts);
    console.log(id);
    console.log(contact);
    return(
        <div>
            <h1>{contact.firstName} {contact.lastName}</h1>
            <p>City: {contact.city}</p>
            <p>Street: {contact.street}</p>
        </div>
    )
}