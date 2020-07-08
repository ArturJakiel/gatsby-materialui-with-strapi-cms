import React from "react";
import { Link } from "gatsby";

const listStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-evenly",
};

const linkStyle = {
  color: "black",
  textDecoration: "none",
  "& :hover": {
    color: "red",
  },
};

const menu = () => {
  return (
    <div style={{ backgroundColor: "#ccc", paddingTop: "10px" }}>
      <ul style={listStyle}>
        <li>
          <Link to="/" style={linkStyle}>
            home
          </Link>
        </li>
        <li>
          <Link to="/page-2/" style={linkStyle}>
            Page 2
          </Link>
        </li>
        <li>
          <Link to="/about/" style={linkStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/blog/" style={linkStyle}>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default menu;
