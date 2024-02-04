import PropTypes from "prop-types";
import { useState } from "react";
import ContactInputField from "../contact-input-field";

const ContactTable = ({ contacts }) => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const searchCB = (contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase());

  let filteredContacts = [];
  if (filter === "All") {
    filteredContacts = searchTerm ? contacts.filter(searchCB) : contacts;
  } else {
    filteredContacts = contacts.filter(
      (contact) =>
        contact.group.toLowerCase() === filter.toLowerCase() &&
        searchCB(contact)
    );
  }

  // this is get more time complexity
  /* if (searchTerm) {
    filteredContacts = filteredContacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
 */

  return (
    <div>
      <select
        onChange={handleChange}
        className="w-full py-2 px-2 border rounded mb-2"
        name="group"
        id="group"
        value={filter}
      >
        <option value="All">All</option>
        <option value="">None</option>
        <option value="Office">Office</option>
        <option value="Home">Home</option>
      </select>
      <div className="mb-3">
        <ContactInputField
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          value={searchTerm}
          handleOnchange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-slate-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact, index) => (
            <tr key={index + 1} className="even:bg-slate-100">
              <td className="p-2">#</td>
              <td className="p-2 font-medium">{contact.name}</td>
              <td className="p-2 font-medium">{contact.email}</td>
              <td className="p-2 font-medium">{contact.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ContactTable.propTypes = {
  contacts: PropTypes.array.isRequired,
};
export default ContactTable;
