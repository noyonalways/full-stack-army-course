import PropTypes from "prop-types";

const ContactInputField = ({
  value,
  name,
  handleOnchange,
  placeholder,
  id,
}) => {
  return (
    <div>
      <input
        className="px-3 py-2 w-full rounded"
        onChange={handleOnchange}
        type="text"
        value={value}
        name={name}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

ContactInputField.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactInputField;
