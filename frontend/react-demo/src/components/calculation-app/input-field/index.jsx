import PropTypes from "prop-types";

const InputField = ({ value, name, type, handleInputChange }) => {
	return (
		<input
			className="border block px-2 py-1 text-lg rounded w-full"
			type={type}
			value={value}
			name={name}
			onChange={handleInputChange}
			// onChange={handleFieldA}
			// onChange={(e) => hangleInputFields("a", e.target.value)}
			// onChange={(e) => hangleInputFields({ a: Number(e.target.value) })}
		/>
	);
};

InputField.propTypes = {
	value: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	handleInputChange: PropTypes.func.isRequired,
};

export default InputField;
