import React from "react";
import NavBar from "../../styles/scss/NavBar.module.scss";

function NavbarElements({ link, text, active, setActive, index }) {
  return (
    <a href={link} className={NavBar.navbarElements}>
      {text}
    </a>
  );
}

export default NavbarElements;
