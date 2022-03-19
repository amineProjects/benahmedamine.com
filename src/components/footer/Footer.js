import React from "react";
import Logo from "components/logo/Logo";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="section footer">
      <Logo />
      <p className="footer--copy">&copy; 2022 all rights reserved</p>
      <ul className="footer--social">
        <li>
          <a
            href="https://www.linkedin.com/in/mohammed-amine-benahmed-b7838917b/"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/amineProjects"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/b_aminoe"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
