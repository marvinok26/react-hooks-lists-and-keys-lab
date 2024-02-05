import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkEl=links.map((link, index)=>{return <a key={index} href={`#${link}`}>{link}</a>})
  return <nav  >
    {linkEl}
  </nav>;
}

export default NavBar;
