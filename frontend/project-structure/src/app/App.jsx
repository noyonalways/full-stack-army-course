import { useState } from "react";
import Button from "../components/UI/buttons/Button";
import InputGroup from "../components/shared/forms/InputGroup";
import useForm from "../hooks/useForm";

const init = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
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

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is Required";
  } else if (values.password.length < 6) {
    errors.confirmPassword = "Confirm Password length must be 6 character";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
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
  const [submitErrors, setSubmitErrors] = useState(null);

  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      setSubmitErrors(errors);
    } else {
      console.log(values);
      clear();
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "2rem",
      }}
    >
      <form
        onSubmit={(e) => handleSubmit(e, cb)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
        }}
      >
        <InputGroup
          value={state.firstName.value}
          error={state.firstName.error || submitErrors?.firstName}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={"firstName"}
          label={"First Name"}
        />
        <InputGroup
          value={state.lastName.value}
          error={state.lastName.error || submitErrors?.lastName}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={"lastName"}
          label={"Last Name"}
        />
        <InputGroup
          value={state.email.value}
          error={state.email.error || submitErrors?.email}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={"email"}
          label={"Email"}
        />
        <InputGroup
          value={state.password.value}
          error={state.password.error || submitErrors?.password}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={"password"}
          label={"Password"}
        />
        <InputGroup
          value={state.confirmPassword.value}
          error={state.confirmPassword.error || submitErrors?.confirmPassword}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={"confirmPassword"}
          label={"Confirm Password"}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: ".5rem",
          }}
        >
          <Button onClick={clear} type="reset">
            Clear
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default App;
