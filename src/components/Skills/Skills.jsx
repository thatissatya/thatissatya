import React from "react";
import "./skills.css";
import html_logo from "../../assets/html.png";
import css_logo from "../../assets/css.png";
import javascript_logo from "../../assets/javascript.png";
import react_logo from "../../assets/react.png";

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h1>My Skills</h1>
            <div className="container">
                <div className="card">
                    <img src={html_logo} alt="html" />
                    <h2>HTML</h2>

                </div>
                <div className="card">
                    <img src={css_logo} alt="css" />
                    <h2>CSS</h2>
                </div>

                <div className="card">
                    <img src={javascript_logo} alt="javascript" />
                    <h2>JavaScript</h2>

                </div>
                <div className="card">
                    <img src={react_logo} alt="react" />
                    <h2>React</h2>
                </div>



            </div>
        </div>
    );
};
export default Skills;
