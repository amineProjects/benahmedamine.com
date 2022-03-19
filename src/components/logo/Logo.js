import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "./logo.scss";

const Logo = () => {
  return (
    <Link className="menu--link text" to="/">
      <StaticImage src="../../../static/images/icon.png" className="image" />{" "}
      code
    </Link>
  );
};

export default Logo;
