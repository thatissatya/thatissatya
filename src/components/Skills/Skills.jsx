import React from "react";
import "./skills.css";
import { Card } from "../Card/Card";
import {domain} from '../data/domain'
import {mySkills} from '../data/common'

const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h1>{mySkills}</h1>
            <div className="container">
              {
                domain.map(((item) => <Card {...item}/>))
              }
            </div>
        </div>
    );
};
export default Skills;
