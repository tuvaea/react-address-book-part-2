import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './components/Dashboard';
import { createContext, useEffect, useState } from 'react';

const ContactContext = createContext();

function App() {
    const [contact, setContact] = useState(null);
    const [contacts, setContacts] = useState([]);
    //https://boolean-uk-api-server.fly.dev/tuvaea/contact   (get all contacts)

    const fetchPeople = async () => {
        const response = await fetch(
          `https://boolean-uk-api-server.fly.dev/tuvaea/contact`
        );
        const data = await response.json();
        console.log(data);
        setContacts(data);
      }
    
      useEffect(() => {
        fetchPeople();
        //console.log(contacts)
      }, []);


    return (
        <>
          <header className='header'>
            <h1>Your Contact Book</h1>
          </header>
          <ContactContext.Provider value={{contact, setContact, contacts, setContacts}}>
            <Routes>
                <Route path='/' element={<Dashboard />}/>
            </Routes>
          </ContactContext.Provider>
        </>
      )
    }

export {App, ContactContext};
