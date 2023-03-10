import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchForNav";
const NavBar = () => {
  return (
    <>
      <ul className="navigation">
        <li>
          <a href>
            {" "}
            <NavLink to="/HTMLForm">HTML Form</NavLink>{" "}
          </a>
        </li>
        <li>
          <a href>
            {" "}
            <NavLink to="/BootstrapForm">Bootstrap Form</NavLink>{" "}
          </a>
        </li>
        <li>
          {" "}
          <a href>
            <NavLink to="/ValidateForm">Validated Form</NavLink>
          </a>
        </li>
        <li>
          {" "}
          <a href>
            <NavLink to="/UploadFile">Upload File</NavLink>
          </a>
        </li>
        <li>
          {" "}
          <a href>
            <NavLink to="/ZoomInOut">Zoom In Out</NavLink>
          </a>
        </li>
        <li>
          {" "}
          <a href>
            <NavLink to="/ImageSearch">Search Image</NavLink>
          </a>
        </li>
        <li>
          {" "}
          <a href>
            <NavLink to="/ImageSearchWithClass">Search Image Class</NavLink>
          </a>
        </li>

        {/* <li style={{ marginTop: "0px", marginLeft: "800px" }}>
          {" "}
          <SearchBar />
        </li> */}
      </ul>
    </>
  );
};
export default NavBar;
