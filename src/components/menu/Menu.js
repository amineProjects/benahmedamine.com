import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import "./menu.scss";
import { Link } from "gatsby";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu--logo">
        <Link className="menu--link text" to="/">
          &Sigma; code
        </Link>
      </div>
      <ul className="menu--items">
        <li className="menu--item">
          <AnchorLink className="menu--link text" to="/#skills" title="Skills">
            skills
          </AnchorLink>
        </li>
        <li className="menu--item">
          <AnchorLink
            className="menu--link text"
            to="/#projects"
            title="projects"
          >
            project
          </AnchorLink>
        </li>
        <li className="menu--item">
          <AnchorLink className="menu--link text" to="#contact" title="contact">
            contact
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
