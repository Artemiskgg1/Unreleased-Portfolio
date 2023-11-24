import Navbar from './components/Navbar.jsx'
import './App.css'
import Homepage from './components/Homepage.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
function App() {

  return (
    <>
      <nav className='navbar flex justify-center items-center'>
        <Navbar />
      </nav>
      <section id='Home'>
        <Homepage/>
      </section>
      <section id='About'>
        <About/>
      </section>
      <section id='Projects'>
        <Projects/>
      </section>
      <section id='Contact'>
        <Contact />
      </section>
    </>
  )
}

export default App
