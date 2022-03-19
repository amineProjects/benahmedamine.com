import React from "react";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="section footer">
      <p className="footer--copy">
        &copy; 2022 &Sigma; code all rights reserved{" "}
      </p>
      <ul className="footer--social">
        <li>
          <a
            href="https://www.linkedin.com/in/mohammed-amine-benahmed-b7838917b/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/amineProjects" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/b_aminoe" target="_blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
