import React from "react";

import "./skills.scss";

const Skills = () => {
  const data = [
    { name: "html5", text: "HTML5", percentage: "90%" },
    { name: "css3-alt", text: "CSS3", percentage: "85%" },
    { name: "js", text: "Javascript", percentage: "75%" },
    { name: "sass", text: "Sass", percentage: "85%" },
    { name: "react", text: "Reactjs", percentage: "75%" },
    { name: "aws", text: "AWS", percentage: "40%" },
  ];
  return (
    <div id="skills" className="skills section">
      <h2 className="title">My Skills</h2>
      <ul className="skills--items">
        {data.map(({ name, text, percentage }) => (
          <li className="skills--item">
            <p className="subtitle">{text}</p>
            <i className={`fa-brands fa-${name} skills--icon`}></i>
            <p className="skills--number">{percentage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
