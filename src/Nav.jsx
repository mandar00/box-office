import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/stared", text: "Stared" },
  ];

  return (
    <>
      <ul>
        {links.map((items) => (
          <li key={items.to}>
            <NavLink to={items.to}>{items.text}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Nav;
