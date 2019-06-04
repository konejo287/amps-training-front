import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/customers" activeStyle={activeStyle}>
        Customers
      </NavLink>
      {" | "}
      <NavLink to="/orders" activeStyle={activeStyle}>
        Orders
      </NavLink>
    </nav>
  );
};

export default Header;
