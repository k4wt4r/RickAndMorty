import React from "react";

function NavbarElemments({ link, text, active, setActive, index }) {
  return (
    <a href={link} className="nav-element">
      {text}
    </a>
  );
}

export default NavbarElemments;
