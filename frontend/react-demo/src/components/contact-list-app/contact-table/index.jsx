import PropTypes from "prop-types";

const ContactTable = ({ contacts }) => {
  return (
    <div>
      <select
        className="w-full py-2 px-2 border rounded mb-2"
        name="group"
        id="group"
      >
        <option value="All">All</option>
        <option value="None">None</option>
        <option value="Office">Office</option>
        <option value="Home">Home</option>
      </select>
      <table className="table-auto w-full lg:max-w-4xl mx-auto">
        <thead>
          <tr className="bg-slate-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Group</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
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
