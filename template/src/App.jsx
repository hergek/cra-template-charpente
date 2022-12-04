import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Router from "./routes/router.js";
import { setMe } from "./store/features/auth/authSlice.js";

function App() {
  const dispatch = useDispatch();
  const me = JSON.parse(localStorage.getItem("me"));

  useEffect(() => {
    // eslint-disable-next-line
    dispatch(setMe(me));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
