
import './App.css'
import About from './components/about'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Projects/>
        <Contact />
    </div>
  )
}

export default App