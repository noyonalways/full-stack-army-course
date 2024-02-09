import { useState } from "react";
import InputGroup from "../components/shared/forms/InputGroup";
import Button from "../components/UI/buttons/Button";

const init = {
  title: "",
  bio: "",
  skills: "",
};

const Form2 = () => {
  const [values, setValues] = useState({ ...init });
  const [errors, setErrors] = useState({ ...init });
  const [focuses, setFocuses] = useState({
    title: false,
    bio: false,
    skills: false,
  });

  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    const key = e.target.name;
    const { errors } = checkValidity(values);

    if (!errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: errors[key],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, errors } = checkValidity(values);
    if (isValid) {
      console.log(values);
      setErrors({ ...errors });
    } else {
      setErrors({ ...errors });
    }
  };

  const handleFocus = (e) => {
    setFocuses((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
  };

  const handleBlur = (e) => {
    const key = e.target.name;
    const { errors } = checkValidity(values);
    if (errors[key] && focuses[key] === true) {
      setErrors((prev) => ({
        ...prev,
        [key]: errors[key],
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

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
            value={values.title}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={errors.title}
          />
          <InputGroup
            label={"Bio"}
            name={"bio"}
            placeholder={"I am a software engineer"}
            value={values.bio}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={errors.bio}
          />
          <InputGroup
            label={"Skills"}
            name={"skills"}
            placeholder={"eg: react, express, mongodb"}
            value={values.skills}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            error={errors.skills}
          />
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
