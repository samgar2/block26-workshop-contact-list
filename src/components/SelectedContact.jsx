import { useEffect, useState } from "react";
import React from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(0);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                const result = await response.json();
                console.log(result);
                setContact(result);
                console.log(contact);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact();
    }, []);

    return (
      <>
          <div>
        <h1>Name: {contact.name}</h1>
        <h2>Email: {contact.email}</h2>
        <h2>Phone: {contact.phone}</h2>
          </div>
      </>
    );
  }