import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const renderLinks = () => (
    links.map(linkAddress => <a key={linkAddress} href={`#${linkAddress}`}>{linkAddress}</a>)
  )
  return(<nav>{renderLinks()}</nav>);
}

export default NavBar;
