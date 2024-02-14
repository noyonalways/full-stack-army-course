import Button from "../../components/UI/buttons/Button";
import InputGroup from "../../components/shared/forms/InputGroup";
import useForm from "../../hooks/useForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.init";
import { useState } from "react";
import { toast } from "sonner";
import Container from "../../components/shared/container";

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

const SignUp = () => {
  const {
    formState: state,
    clear,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
  } = useForm({ init, validate });
  const [isLoading, setIsLoading] = useState(false);

  const cb = ({ hasError, values, errors }) => {
    if (hasError) {
      Object.keys(errors)
        .reverse()
        .forEach((key) => {
          toast.error(errors[key], {
            position: "top-right",
            id: key,
          });
        });
    } else {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (user) {
            toast.success("User created successfully", {
              position: "top-right",
              id: "sign-up-success",
            });
          }
        })
        .catch((err) => {
          if (err.message.includes("auth/email-already-in-use")) {
            toast.error("Email already in use", {
              position: "top-right",
              id: "sign-up-error",
            });
          }
        })
        .finally(() => setIsLoading(false));
      clear();
    }
  };

  return (
    <Container>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          Creating User.....
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
            margin: "0 auto",
            marginTop: "2rem",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              margin: "1rem 0",
            }}
          >
            Sign Up
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
              value={state.firstName.value}
              error={state.firstName.error}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name={"firstName"}
              label={"First Name"}
            />
            <InputGroup
              value={state.lastName.value}
              error={state.lastName.error}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              name={"lastName"}
              label={"Last Name"}
            />
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
            <InputGroup
              value={state.confirmPassword.value}
              error={state.confirmPassword.error}
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
              <Button type="submit">Sign Up</Button>
            </div>
          </form>
        </div>
      )}
    </Container>
  );
};

export default SignUp;
