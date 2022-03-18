import React from "react";

import Menu from "components/menu/Menu";
import Skills from "components/skills/Skills";
import Projects from "components/projects/Projects";

import "sass/index.scss";

const IndexPage = () => {
  return (
    <div className="container">
      <Menu />
      <main>
        <div className="bio">
          <h1 className="title">Hi, I'am Amine</h1>
          <p className="subtitle">Frontend developer from Oran, Algeria.</p>
          <p className="text">
            I'm passionate about creating new web app, and solving problem
          </p>
        </div>
        <Skills />
        <Projects />
      </main>
    </div>
  );
};

export default IndexPage;
