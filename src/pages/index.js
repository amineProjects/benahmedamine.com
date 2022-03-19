import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Menu from "components/menu/Menu";
import Skills from "components/skills/Skills";
import Projects from "components/projects/Projects";
import Contact from "components/contact/Contact";
import Footer from "components/footer/Footer";

import "sass/index.scss";

const IndexPage = () => {
  return (
    <div id="top" className="container">
      <Menu />
      <main style={{ position: "relative" }}>
        <div id="bio" className="bio">
          <h1 className="title">Hi, I'am Amine</h1>
          <p className="subtitle">Frontend developer from Oran, Algeria.</p>
          <p className="text">
            I'm passionate about creating new web app, and solving problem
          </p>
        </div>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <AnchorLink className="goToTop" to="#top">
        &uarr;
      </AnchorLink>
    </div>
  );
};

export default IndexPage;
