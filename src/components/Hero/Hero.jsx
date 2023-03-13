import React from "react";
import "./hero.css";
import profile from "../../assets/profile.jpg";
import polygon from "../../assets/polygon-scatter.svg";
import logo_linkedin from "../../assets/linkedin.png";
import logo_twitter from "../../assets/twitter.png";
import logo_github from "../../assets/github.png";
import logo_instagram from "../../assets/instagram.png";
const Hero = () => {
    return (
        <div className="hero" id="home">
            <div className="content">
                <div className="content-div">
                    <h1 className="salutation">Hi, <span class="wave">👋</span></h1>
                    <p className="description">I am Satya Prakash</p>
                    <p className="about">
                    A full stack developer with a vision to build easy-to-use and 
                    easy-to-maintain applications. I love challenging and complex tasks. 
                    Always keen to meet new people, learn from them, and help them to achieve common goals.
                    </p>
                    <div className="socials">
                        <a
                            href="https://twitter.com/ksatyasingh"
                            target="_blank"
                            className="social"
                        >
                            <img src={logo_twitter} alt="Twitter" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/satyaprakashksingh"
                            target="_blank"
                            className="social"
                        >
                            <img src={logo_linkedin} alt="Linkedin" />
                        </a>
                        <a
                            href="https://github.com/satyaprakashksingh"
                            target="_blank"
                            className="social"
                        >
                            <img src={logo_github} alt="Github" />
                        </a>
                        <a
                            href="https://www.instagram.com/satyaprakashksingh/?"
                            target="_blank"
                            className="social"
                        >
                            <img src={logo_instagram} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="image">
                <div className="profile-img-div">
                    <div className="lines"></div>
                    <img src={profile} alt="profile" className="profile-img" />
                </div>
                <div className="polygons">
                    <img src={polygon} />
                </div>
            </div>
        </div>
    );
};
export default Hero;
