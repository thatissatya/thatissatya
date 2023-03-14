import React, {useState} from 'react'
import { Card } from '../Card/Card';
import './home.css'
import { Navigation, aboutMe, intro, socialMedia, mySkills, domain } from "../data/common";
const Navbar = () => {
    const [section, setSection] = useState(null)
    return (<div className="navbar">
        <div className="navbar-menu">
            {
                Navigation.map(navigator => section === navigator.name ? null : <a href={navigator.url} className={navigator.type} onClick={()=> setSection(navigator.name)} key={navigator.id}>{navigator.name}</a>)
            }
        </div>
    </div>)
}
const MainContent = () => {
    return (<div className="main-content" id="home">
        <div className="content">
            <div className="salutation">Hi, <span className='wave'>👋</span></div>
            <div className="description">{intro}</div>
            <div className="about">{aboutMe}</div>
            <div className="socials">
                {
                    socialMedia.map(media => <a
                        href={media.profileUrl}
                        target={media.target}
                        className={media.type}
                        key={media.id}
                    >
                        <img src={media.iconUrl} alt={media.alt} />
                    </a>)
                }
            </div>
        </div>
        <div className="profile-picture-container">
            <div className="profile-picture">
                <img src='/assets/profile.jpg' alt="profile-picture" className="profile-photo" />
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
            <div className="skills-title">{mySkills}</div>
            <div className="skills-container">
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
            <Navbar />
            <MainContent />
            <Skills />
        </div>
    )
}

export default Home