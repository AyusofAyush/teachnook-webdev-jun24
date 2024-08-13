import React from "react";
import "./Header.scss";
import Button from "../Button/Button";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="flex main-header-parent w-100">
      <header className="flex header-parent space-btw w-100">
        <div className="flex brand-name center text-3xl">Travor</div>
        <ul className="flex menu-items center text-sm">
          <li className="w-100">
            <Link to="/">Home</Link>
          </li>
          <li className="w-100">
            <Link to="/about">About</Link>
          </li>
          <li className="w-100">
            <Link to="/tour">Offerings</Link>
          </li>
          <li className="w-100">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex center">
          <Button />
        </div>
      </header>
    </div>
  );
}

export default Header;
