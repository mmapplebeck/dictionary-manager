import { useState } from "react";

const useForm = callback => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    name
  };
};

export default useForm;
