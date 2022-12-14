import React from "react";
import { useSelector } from "react-redux";
import LoadingToRedirect from "../Hooks/LoadingToRedirect.jsx";

const ProtectedRoutes = ({ children }) => {
  const { me } = useSelector((state) => ({ ...state.me }));
  return me ? children : <LoadingToRedirect />;
};

export default ProtectedRoutes;
