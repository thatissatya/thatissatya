import './app.style.css'
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/skills/Skills.jsx'
import {Navbar} from './components/Navbar/Navbar'
const  App = () => {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Skills />
        </div>
    )
}

export default App
