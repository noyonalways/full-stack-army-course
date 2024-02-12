import styled from "styled-components";
import Label from "../../UI/inputs/Label";
import TextInput from "../../UI/inputs/TextInput";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: ${(props) =>
    props.error ? "1px solid #ff0000" : "1px solid #e1e1e1"};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: #ff0000;
`;

const InputGroup = ({
  label,
  name,
  value,
  placeholder,
  error,
  onChange,
  onFocus,
  onBlur,
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        name={name}
        id={name}
        placeholder={placeholder ?? ""}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        error={error}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default InputGroup;
