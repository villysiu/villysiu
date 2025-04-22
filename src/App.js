import './App.css';
import Header from './features/header/Header';
import AboutMe from "./features/aboutme/AboutMe";
import Projects from "./features/projects/Projects";
import Skill from "./features/skill/Skill";
import ContactForm from "./features/contact/ContactForm";
import Footer from "./features/header/Footer";
import SlideShow from "./features/projects/SlideShow";
function App() {
  return (
    <div id="app">
        {/*<div id="app_content">*/}
            <Header />
            <AboutMe />
            <Projects />

        <Skill />
        <ContactForm />
        <Footer />


        {/*</div>*/}
    </div>
  );
}

export default App;
