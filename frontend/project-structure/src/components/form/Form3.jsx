import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/UI/buttons/Button";
import { deepClone } from "../utils/object-utils";

const init = {
  title: {
    value: "",
    error: "",
    focus: false,
  },
  bio: {
    value: "",
    error: "",
    focus: false,
  },
  skills: {
    value: "",
    error: "",
    focus: false,
  },
};

const Form3 = () => {
  const [state, setState] = useState({ ...init });
  // const [hasError, setHasError] = useState(false);

  const mapStateToValues = (state) => {
    return Object.keys(state).reduce((acc, cur) => {
      acc[cur] = state[cur].value;
      return acc;
    }, {});
  };

  // handle to change
  const handleChange = (e) => {
    const { name: key, value } = e.target;
    const oldState = deepClone(state);
    const values = mapStateToValues(oldState);
    const { errors } = checkValidity(values);

    oldState[key].value = value;

    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);

    /* const { name: key, value } = e.target;
    setState((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        value: value,
      },
    })); */
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const oldState = deepClone(state);
    const values = mapStateToValues(oldState);
    const { isValid, errors } = checkValidity(values);

    if (isValid) {
      console.log(state);
    } else {
      console.log(errors);
      Object.keys(errors).forEach((key) => {
        oldState[key].error = errors[key];
      });
      setState(oldState);
    }
  };

  // handle focus
  const handleFocus = (e) => {
    const { name: key } = e.target;
    const oldState = deepClone(state);
    oldState[key].focus = true;
    setState(oldState);
  };

  // handle blur
  const handleBlur = (e) => {
    const { name: key } = e.target;
    const oldState = deepClone(state);
    const values = mapStateToValues(oldState);
    const { errors } = checkValidity(values);

    if (oldState[key].focus && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);
  };

  // check validity
  const checkValidity = (values) => {
    const errors = {};
    const { title, bio, skills } = values;
    if (!title) {
      errors.title = "Title is required";
    }
    if (!bio) {
      errors.bio = "Bio is required";
    }
    if (!skills) {
      errors.skills = "Skills is required";
    }

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        marginTop: "2rem",
      }}
    >
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <InputGroup
            label={"Title"}
            name={"title"}
            placeholder={"Software Engineer"}
            value={state.title.value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.title.error}
          />
          <InputGroup
            label={"Bio"}
            name={"bio"}
            placeholder={"I am a software engineer"}
            value={state.bio.value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.bio.error}
          />
          <InputGroup
            label={"Skills"}
            name={"skills"}
            placeholder={"eg: react, express, mongodb"}
            value={state.skills.value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={state.skills.error}
          />
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Form3;
