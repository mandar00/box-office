import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const links = [
    { to: "/", text: "Home" },
    { to: "/stared", text: "Stared" },
  ];

  return (
    <>
    <div className="navMainDiv">
        {links.map((items) => (
            <div key={items.text} className={`nav${items.text}`}>
            <NavLink activeclassname="nav" to={items.to}>{items.text}</NavLink>
            </div>
        ))}
    </div>
    </>
  );
};
export default Nav;
