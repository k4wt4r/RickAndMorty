import React from "react";
import NavbarElements from "./NavbarElements";
import NavBar from "../../styles/scss/NavBar.module.scss";

const navElements = [
  { link: "/location", text: "Location" },
  { link: "/characters", text: "Characters" },
  { link: "/episodes", text: "Episodes" },
];

function Navbar() {
  const [activElement, setActivElement] = React.useState(0);
  return (
    <nav className={NavBar.navbar}>
      <div className={NavBar.logo}>
        <a href="/" className="nav-logo">
          LoGo
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
    </nav>
  );
}

export default Navbar;
