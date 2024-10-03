import { useContext } from "react";
import { ContactContext } from "../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  firstName: "",
  lastName: "",
  street: "",
  city: ""
};

export function CreateForm() {
    const { contacts, fetchContacts } = useContext(ContactContext);
    
    const [formData, setFormData] = useState(initialFormData);

    const maxId = Math.max(...contacts.map(c => c.id));

    const navigate = useNavigate();

    console.log("maxid: " + maxId);
    
    async function handleSubmit(event) {
      event.preventDefault();
        const response = await fetch(`https://boolean-uk-api-server.fly.dev/tuvaea/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        console.log(response);
  
        await fetchContacts();
  
        setFormData(initialFormData);
        navigate('/'); 
    }

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
        <div>
            <h2>----------------------------------New contact---------------------------------</h2>
            <form onSubmit={handleSubmit} className="margin">
              <b className="margin-item">First Name: </b>
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="margin-item form-input"
                />
              </div>
              <b className="margin-item">Last Name: </b>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="margin-item form-input"
                />
              </div>
              <b className="margin-item">City: </b>
              <div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="margin-item form-input"
                />
              </div>
              <b className="margin-item">Street: </b>
              <div>
                <input
                  type="text"
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  className="margin-item form-input"
                />
              </div>
              <button type="submit">Create</button>
            </form>
        </div>
    )
  }
  