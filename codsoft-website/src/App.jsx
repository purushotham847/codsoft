import Navbar from './compounents/navbar'
import Intro from './compounents/intro'
import Aboutsection from './compounents/Aboutsection'
import Footer from './compounents/footer'
import Skills from './compounents/skills'
import Projects from './compounents/projects'
import Contact from './compounents/contact'



function App() {
  

  return (
    <>
      <Navbar />
        <Intro />
        <Aboutsection />
        <Skills />
        {/* <Projects /> */}
        <Contact />
        <Footer />
    </>
  )
}

export default App
