import React from "react";


function NavbarElements({ link, text, active, setActive, index }) {
  return (
    <a href={link} className={`block mt-4 lg:inline-block lg:mt-0 mr-4 cursor-pointer ${active ? "text-green-700" : "text-white"}`}
      onClick={() => setActive(index)}
    >
      {text}
    </a>
  );
}

export default NavbarElements;
