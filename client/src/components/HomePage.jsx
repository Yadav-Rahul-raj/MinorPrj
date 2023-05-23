// client/src/components/HomePage.js
import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const userId = useSelector((state) => state.global.userId);
  const userRole = useSelector((state) => state.global.userRole);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>User ID: {userId}</p>
      <p>User Role: {userRole}</p>
    </div>
  );
};

export default HomePage;
