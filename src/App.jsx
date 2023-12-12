import SelectedContact from "./components/SelectedContact";
import { useState } from "react";
import ContactList from './components/ContactList'
import './App.css'

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}  />
      )}
    </>
  );
}
