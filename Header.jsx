import { Link } from "react-router-dom";
import { LOGO_URL } from "./utils/constant";

import { useEffect, useState } from "react";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  console.log("header render");

  useEffect(() => {
    console.log("useeffect render");
  }, [btnName]);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/body">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li>
            <Link to="/">cart</Link>
          </li> */}
          {/* <button className="btnName" onClick={() => setbtnName("Logout")}> */}
          {/* {btnName}
          </button> */}
          {/* do the buttonn toggle */}
          <button
            className="btnName"
            onClick={() => {
              btnName === "Login" ? setbtnName("LogOut") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
