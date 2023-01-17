import { useState } from "react";

function useHandleChange(initialValue) {
  const [state, setSate] = useState(initialValue);

  function handleChange(e) {
    let { name, value } = e.target ?? {};
    setSate({ ...state, [name]: value });
  }

  return [state, handleChange];
}

export default useHandleChange;
