import InputGroup from "../components/shared/forms/InputGroup";
import useForm from "../hooks/useForm";

const init = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First Name is Required";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is Required";
  }

  if (!values.email) {
    errors.email = "Email is Required";
  }

  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 6) {
    errors.password = "Password length must be 6 character";
  }

  return errors;
};

const App = () => {
  const {
    formState: state,
    clear,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
  } = useForm({ init, validate });

  // console.log(state)

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "2rem",
      }}
    >
      <form>
        <InputGroup
          value={state.firstName.value}
          error={state.firstName.error}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={"firstName"}
          label={"First Name"}
        />
      </form>
    </div>
  );
};

export default App;
