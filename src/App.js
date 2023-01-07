import './App.css';
import About from './components/About';
import Namesection from './components/namesection.js';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Preloader from './components/Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import Resume from './components/Resume';
function App() {
  AOS.init();
  return (
    <>
    <Preloader/>
    <Namesection/>
    <About/>
    <Skills/> 
    <Resume/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
