import PropTypes from "prop-types";
import InputField from "../input-field";

const InputSection = ({ inputs, handleInputChange }) => {
  return (
    <div>
      <p className="font-medium text-lg mb-2">Inputs</p>
      <div className="space-y-2 mb-2">
        <InputField
          type={"number"}
          value={inputs.a}
          name={"a"}
          handleInputChange={handleInputChange}
        />
        <InputField
          type={"number"}
          value={inputs.b}
          name={"b"}
          handleInputChange={handleInputChange}
        />
      </div>
    </div>
  );
};

InputSection.propTypes = {
  inputs: PropTypes.shape({
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default InputSection;
