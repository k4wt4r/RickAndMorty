import React from "react";
import NavbarElements from "./NavbarElements";

const navElements = [
  { link: "/location", text: "Location" },
  { link: "/characters", text: "Characters" },
  { link: "/episodes", text: "Episodes" },
];

function Navbar() {
  const [activElement, setActivElement] = React.useState(0);
  return (
    <nav>
      <div>
        <a href="/" className="nav-logo">
          {" "}
          LoGo
        </a>
      </div>
      <div>
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
