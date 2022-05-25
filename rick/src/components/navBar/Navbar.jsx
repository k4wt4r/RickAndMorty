import React from "react";
import NavbarElements from "./NavbarElements";
import NavBar from "../../styles/scss/NavBar.module.scss";
import logo from "./img/logo.png";

const navElements = [
  { link: "/location", text: "Location" },
  { link: "/characters", text: "Characters" },
  { link: "/episodes", text: "Episodes" },
];

function Navbar() {
  const [activElement, setActivElement] = React.useState(0);
  return (
    <nav className={NavBar.navbar}>
      <div className={NavBar.navbarLogoAndMenu}>

      <div className={NavBar.logo}>
        <a href="/" className="nav-logo">
          <img className={NavBar.logoimg} src={logo} alt="rick and morty" />
        </a>
      </div>
      <div className={NavBar.menu}>
        {navElements.map(({ link, text }, index) => (
          <NavbarElements
            link={link}
            text={text}
            active={activElement === index}
            setActive={setActivElement}
            index={index}
          />
        ))}
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
