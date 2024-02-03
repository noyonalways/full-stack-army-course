import { useState } from "react";
import ContactInputField from "../contact-input-field";
import PropTypes from "prop-types";

const INITIAL_INPUT_VALUE = {
  name: "",
  email: "",
  group: "",
};

const ContactInputForm = ({ addContact }) => {
  const [values, setValues] = useState({ ...INITIAL_INPUT_VALUE });
  const { name, email, group } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(values);
    setValues({ ...INITIAL_INPUT_VALUE });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="font-medium" htmlFor="name">
            Name:
          </label>
          <ContactInputField
            name="name"
            handleOnchange={handleChange}
            value={name}
            placeholder="Your Name"
            id={"name"}
          />
        </div>
        <div className="space-y-1">
          <label className="font-medium" htmlFor="email">
            Email:
          </label>
          <ContactInputField
            name="email"
            handleOnchange={handleChange}
            value={email}
            placeholder="Your Email"
            id={"email"}
          />
        </div>
        <div>
          <label className="block w-full mb-2" htmlFor="group">
            Group:
          </label>
          <select
            onChange={handleChange}
            className="w-full py-2 px-2"
            name="group"
            id="group"
            value={group}
          >
            <option value="">Select Group</option>
            <option value="Office">Office</option>
            <option value="Home">Home</option>
          </select>
        </div>
        <div className="">
          <button
            className="bg-green-400 hover:bg-green-500 text-white w-full py-2 px-3 rounded active:scale-95 duration-200"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

ContactInputForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactInputForm;
