import { useState } from "react";
import ContactInputForm from "./contact-input-form";
import ContactTable from "./contact-table";

const ContactListApp = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center my-8">
          Contact List App
        </h1>
        <div className="flex lg:flex-row w-full justify-between gap-x-10">
          <div className="bg-slate-200 rounded-md basis-1/2 p-10">
            <h2 className="text-xl font-semibold text-center mb-3">
              Create Contact
            </h2>
            <ContactInputForm addContact={addContact} />
          </div>
          <div className="basis-1/2">
            <ContactTable contacts={contacts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactListApp;
