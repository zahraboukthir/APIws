import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Link to={"/"}>
        {" "}
        <button>Home</button>
      </Link>
      <input type="text" name="" id="" />
    </div>
  );
};

export default NavigationBar;
