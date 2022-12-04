import React from "react";
import Footer from "../components/Footer.jsx";
import Sidebard from "../components/Sidebard.jsx";
import Topbard from "../components/Topbard.jsx";

const Layouts = ({ children }) => {
  return (
    <>
      <Topbard />
      <Sidebard />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
