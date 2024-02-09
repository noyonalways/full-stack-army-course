import { useState } from "react";
import { deepClone, isEmpty } from "../utils/object-utils";

/**
 * @typedef {Object} Param
 * @property {Object} init
 * @property {{Object|Boolean}} validate
 *
 * Create forms using the useForm hook
 * @param {Param} param
 * @returns
 */

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  // handle to change
  const handleChange = (e) => {
    const { name: key, value } = e.target;

    const oldState = deepClone(state);
    oldState[key].value = value;

    const values = mapStateToKeys(oldState, "value");
    const { errors } = checkValidity(values);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    setState(oldState);
  };

  // handle focus
  const handleFocus = (e) => {
    const { name: key } = e.target;
    const oldState = deepClone(state);
    oldState[key].focused = true;

    if (oldState[key].touched) {
      oldState[key].focused = true;
    }

    setState(oldState);
  };

  // handle blur
  const handleBlur = (e) => {
    const { name: key } = e.target;
    const oldState = deepClone(state);
    const values = mapStateToKeys(oldState, "value");
    const { errors } = checkValidity(values);

    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    oldState[key].focused = false;

    setState(oldState);
  };

  // handle submit
  const handleSubmit = (e, cb) => {
    e.preventDefault();

    if (typeof validate === "boolean") {
      if (validate) {
        cb({
          values: mapStateToKeys(state, "value"),
          touched: mapStateToKeys(state, "touched"),
          focused: mapStateToKeys(state, "focused"),
          error: mapStateToKeys(state, "error"),
          hasError: false,
        });
      } else {
        cb({
          errors: mapStateToKeys(state, "errors"),
          hasError: true,
        });
      }
      return;
    }

    if (typeof validate === "function") {
      const values = mapStateToKeys(state, "value");
      const { errors } = validate(values);
      const hasError = !isEmpty(errors);

      if (hasError) {
        cb({
          errors,
        });
      } else {
        cb({
          values: mapStateToKeys(state, "value"),
          touched: mapStateToKeys(state, "touched"),
          focused: mapStateToKeys(state, "focused"),
          hasError,
        });
      }
    }

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

  return {
    formState: state,
    handleChange,
  };
};

export default useForm;

const mapValuesToState = (values) => {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = {
      value: values[key],
      error: "",
      focused: false,
      touched: false,
    };

    return acc;
  }, {});
};

const mapStateToKeys = (state, key) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur][key];
    return acc;
  }, {});
};
