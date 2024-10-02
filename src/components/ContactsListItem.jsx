

export function ContactsListItem({contact}) {

    //const {contact} = useContext(ContactContext);
    return(
        <li>
            <h3>{contact.firstName} {contact.lastName}</h3>
        </li>
    )
}

