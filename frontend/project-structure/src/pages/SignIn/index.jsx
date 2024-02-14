import { useState } from "react";
import Container from "../../components/shared/container";
import InputGroup from "../../components/shared/forms/InputGroup";
import useForm from "../../hooks/useForm";
import Button from "../../components/UI/buttons/Button";

const init = {
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is Required";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  }
  return errors;
};

const SignIn = () => {
  const [isLoading, setIsloading] = useState(false);
  const {
    formState: state,
    clear,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
  } = useForm({ init, validate });

  const cb = ({ hasError, errors, values }) => {
    if (hasError) {
      console.log(errors);
    } else {
      console.log(values);
    }
  };

  return (
    <Container
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              margin: "1rem 0",
            }}
          >
            Sign In
          </h2>
          <form
            onSubmit={(e) => handleSubmit(e, cb)}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem 0rem",
            }}
          >
            <InputGroup
              value={state.email.value}
              error={state.email.error}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name={"email"}
              label={"Email"}
            />
            <InputGroup
              value={state.password.value}
              error={state.password.error}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name={"password"}
              label={"Password"}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                columnGap: ".8rem",
              }}
            >
              <Button onClick={clear} type="reset">
                Clear
              </Button>
              <Button type="submit">Sign In</Button>
            </div>
          </form>
        </div>
      )}
    </Container>
  );
};

export default SignIn;
