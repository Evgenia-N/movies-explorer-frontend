import React from "react";

export function useForm() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setValues((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({
      ...prevState,
      [name]: input.validationMessage,
    }));
    setIsValid(input.closest("form").checkValidity());
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsFormValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsFormValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}
