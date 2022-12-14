import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner.jsx";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-600">
      <Spinner size={20} />
    </div>
  );
};

export default LoadingToRedirect;
