import React from "react";

const Footer = () => {
  return (
    <section class="bg-[#f1f3f6] ml-[20px]">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="sm:flex sm:items-center sm:justify-between">
          <p class="text-sm text-gray-600">
            © Copyright 2021, développé par{" "}
            <a
              href="https://uhtec.net"
              target="_blank"
              className="text-blue-500"
              rel="noreferrer"
            >
              Uhtec
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
