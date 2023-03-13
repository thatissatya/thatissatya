import React from 'react'
import './home.style.css'
export const Home = () => {
    return (
        <div className='home'>
            <div className='header'></div>
            <div className='content'>
                    <h1>Hello <span class="wave-hello">👋</span>
                    </h1>
                    <h2 class="intro__tagline">I'm 
                    <span class="name">Satya Prakash</span>, 
                    a design-minded front-end software engineer focused on building beautiful interfaces 
                    &amp; experiences <span class="emoji technologist"></span> </h2>
            </div>
        </div>
    )
}