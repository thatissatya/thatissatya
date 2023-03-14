import React, { useState } from 'react'
import { FiAlignRight } from "react-icons/fi";
import { Card } from '../Card/Card';
import { Navigation, aboutMe, intro, socialMedia, mySkills, domain  } from "../data/common";
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (<div className="navbar">
        <div className="links">
            <div>
                {
                    Navigation.map(navigator => <a href={navigator.url} className={navigator.type}>{navigator.name}</a>)
                }
            </div>
        </div>
        <div className="toggle-links" onClick={() => { setToggleMenu(prev => !prev) }}>
            <FiAlignRight className="hamburger-icon" />
        </div>
        {toggleMenu
            ?
            <div className="toggle-menu">
                <Links />
            </div>
            :
            null}
    </div>)
}
const MainContent = () => {
    return (<div className="hero" id="home">
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
    </div>)
}
const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h1>{mySkills}</h1>
            <div className="container">
                {
                    domain.map(((item) => <Card {...item} />))
                }
            </div>
        </div>
    );
};
const Home = () => {
    return (
        <div className='ui-home'>
            <div className='ui-home-navbar'>
                <Navbar />
            </div>
            <div className='ui-home-body'>
                <div className='ui-home-body-main'><MainContent/></div>
                <div className='ui-home-body-skills'><Skills/></div>
            </div>
        </div>
    )
}

export default Home