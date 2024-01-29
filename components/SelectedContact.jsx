import React, { useState, useEffect } from 'react';

export default function SelectedContact({ contactId }) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!contactId) {
      // If contactId is null, reset state
      setSelectedContact(null);
      setLoading(false);
      return;
    }

    // Fetch data from the external API for the selected contact
    fetch(` https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSelectedContact(data);
        console.log('Fetched data:', data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [contactId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!selectedContact) {
    return <p>Contact not found.</p>;
  }

  return (
    <div>
      <h2>{selectedContact.name}</h2>
      <p>Email: {selectedContact.email}</p>
      <p>Phone: {selectedContact.phone}</p>
      <p>Address: {selectedContact.address.street}, {selectedContact.address.suite}, {selectedContact.address.city}, {selectedContact.address.zipcode}</p>
    
    </div>
  );
}

