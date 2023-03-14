import React from "react";
import "./hero.css";
import { aboutMe, intro, socialMedia } from "../data/common";
const Hero = () => {
    return (
        <div className="hero" id="home">
            <div className="content">
                <div className="content-div">
                    <h1 className="salutation">Hi, <span className='wave'>👋</span></h1>
                    <p className="description">{intro}</p>
                    <p className="about">{aboutMe}</p>
                    <div className="socials">
                        {
                            socialMedia.map(media => <a
                                href={media.profileUrl}
                                target={media.target}
                                className={media.type}
                            >
                                <img src={media.iconUrl} alt={media.alt} />
                            </a>)
                        }
                    </div>
                </div>
            </div>
            <div className="image">
                <div className="profile-img-div">
                    <div className="lines"></div>
                    <img src='/assets/profile.jpg' alt="profile" className="profile-img" />
                </div>
                <div className="polygons">
                    <img src='/assets/polygon-scatter.svg' />
                </div>
            </div>
        </div>
    );
};
export default Hero;
