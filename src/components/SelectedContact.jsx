import { useEffect, useState } from "react";
import React from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contacts, setContact] = useState(0);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
                );
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact();
    }, []);

    return (
      <>
          <div>

          </div>
      </>
    );
  }