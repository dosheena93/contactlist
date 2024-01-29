import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState(null);

  useEffect(() => {
    
    fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact contactId={selectedContactId} contacts={contacts} />
      ) : (
        <ContactList
          contacts={contacts}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
}
