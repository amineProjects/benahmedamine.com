import React from "react";

import "./menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu--logo">&Sigma; code</div>
      <ul className="menu--items">
        <li className="menu--item">
          <a className="menu--link text" href="#skills">
            skills
          </a>
        </li>
        <li className="menu--item">
          <a className="menu--link text" href="#project">
            project
          </a>
        </li>
        <li className="menu--item">
          <a className="menu--link text" href="#contact">
            contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
