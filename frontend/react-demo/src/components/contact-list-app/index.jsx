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
        <div className="flex flex-col gap-y-5 lg:flex-row w-full justify-between gap-x-10">
          <div className="lg:bg-slate-100 rounded-md lg:basis-1/2 p-5 lg:p-10 lg:shadow-md">
            <h2 className="text-xl font-semibold text-center mb-3">
              Create Contact
            </h2>
            <ContactInputForm addContact={addContact} />
          </div>
          <div className="lg:basis-1/2">
            <ContactTable contacts={contacts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactListApp;
