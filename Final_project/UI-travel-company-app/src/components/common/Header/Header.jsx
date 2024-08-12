import React from "react";
import "./Header.scss";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="flex main-header-parent w-100">
      <header className="flex header-parent space-btw w-100">
        <div className="flex brand-name center text-3xl">Travor</div>
        <ul className="flex menu-items center text-sm">
          <li className="w-100">Home</li>
          <li className="w-100">About</li>
          <li className="w-100">Offerings</li>
          <li className="w-100">Contact</li>
        </ul>
        <div className="flex center">
          <Button />
        </div>
      </header>
    </div>
  );
}

export default Header;
