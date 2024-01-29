import React, { useState, useEffect } from 'react';
import ContactList from './components/ContactList.jsx';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch data from the external API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <>
      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
