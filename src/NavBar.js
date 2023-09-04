import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="nav-components custom-left-align">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Converter for Multiple Currencies 
        </a>
      </li>
    </ul>
  </div>
  <div className="nav-components custom-right-align">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          2-Currency Converter
        </a>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default NavBar;