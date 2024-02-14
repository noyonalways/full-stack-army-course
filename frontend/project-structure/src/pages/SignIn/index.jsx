import { useState } from "react";
import Container from "../../components/shared/container";
import InputGroup from "../../components/shared/forms/InputGroup";
import useForm from "../../hooks/useForm";
import Button from "../../components/UI/buttons/Button";
import { toast } from "sonner";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.init";

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
  const [isLoading, setIsLoading] = useState(false);
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
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          if (user) {
            toast.success("User Signed in Successfully", {
              position: "top-right",
              id: "sign-in-success",
            });
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.message.includes("auth/invalid-credential")) {
            toast.error("Invalid Credentials", {
              position: "top-right",
              id: "sign-in-error",
            });
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <Container
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              textAlign: "center",
            }}
          >
            User Authenticating....
          </h1>
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
            marginTop: "4rem",
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
