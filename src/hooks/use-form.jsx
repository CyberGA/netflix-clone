import { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [form, setForm] = useState({});

  const onChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  function resetForm() {
    setForm({});
  }

  const loginFormNotValid = !form.email?.length || !form.password?.length;
  const signupFormValid = !form.email?.length || !form.password?.length;

  return { form, onChange, loginFormNotValid, signupFormValid, resetForm };
};
