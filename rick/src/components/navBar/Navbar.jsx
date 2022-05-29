import React, { useState } from "react";
import NavbarElements from "./NavbarElements";
import NavBar from "../../styles/scss/NavBar.module.scss";
import logo from "./img/logo.png";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

const navElements = [
  { link: "/", text: "Characters" },
  { link: "/location", text: "Location" },
  { link: "/episodes", text: "Episodes" },
];

function Navbar() {
  const [activElement, setActivElement] = useState(0);
  //const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={NavBar.navbar}>
      <div className={NavBar.navbarLogoAndMenu}>

        <div className={NavBar.logo}>
          <div href="/" className={NavBar.rickAndMortyLogo}>
            <img className={NavBar.logoimg} src={logo} alt="rick and morty" />
          </div>
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

        <div className={NavBar.searchAndDarkModeIcons}>

          <RiSearch2Line className={NavBar.searchIcon} />

          <MdOutlineDarkMode className={NavBar.darkModeIcon} />

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
