import React from "react";

const NavBar = ({route, routeUpdated}) => {
  const multiCurrencyClasses = route === "multi-currencies"
    ? "nav-link active"
    : "nav-link";

  const twoCurrencyClasses = route === "two-currencies"
    ? "nav-link active"
    : "nav-link";
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="nav-components custom-left-align">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className={multiCurrencyClasses} href="#" onClick={() => routeUpdated("multi-currencies")}>
          Converter for Multiple Currencies 
        </a>
      </li>
    </ul>
  </div>
  <div className="nav-components custom-right-align">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className={twoCurrencyClasses} href="#" onClick={() => routeUpdated("two-currencies")}>
          2-Currency Converter
        </a>
      </li>
    </ul>
  </div>
</nav>

  );
};

export default NavBar;