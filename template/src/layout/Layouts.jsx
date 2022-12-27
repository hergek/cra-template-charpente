import React from "react";
import Footer from "../components/Footer.jsx";
import Sidebard from "../components/Sidebard.jsx";
import Topbard from "../components/Topbard.jsx";

const Layouts = ({ children }) => {
  return (
    <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <Sidebard />
      <main class="main w-[75%] flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <Topbard />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layouts;
