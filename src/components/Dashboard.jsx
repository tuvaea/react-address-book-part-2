import { Link } from "react-router-dom"
import { ContactsList } from "./ContactsList"


export function Dashboard(){    
    return(
        <main className="dashboard-layout">
            <section>
                <h2>-----------Menu-----------</h2>
                <p className="left-align">
                    <Link to={'/'}>DashBoard</Link>
                </p>
                <p className="left-align">
                    <Link to={'/'}>Create new contact</Link>
                </p>
            </section>
            <section>
                <h2>------------------------------------Contacts------------------------------------</h2>
                <ContactsList/>
            </section>
        </main>  
    )
}