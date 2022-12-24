import React from "react";
import Footer from "../components/Footer.jsx";
import Sidebard from "../components/Sidebard.jsx";
import Topbard from "../components/Topbard.jsx";

const Layouts = ({ children }) => {
  return (
    <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebard />
      <div class="flex flex-col flex-1 w-full">
        <Topbard />
        <main class="h-full flex flex-col justify-between overflow-y-auto bg-green-500">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layouts;
