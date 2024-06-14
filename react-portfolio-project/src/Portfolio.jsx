import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import Work from "./Work"
import About from "./About"
import Contact from "./Contact"
import "./Portfolio.css"

export default function Portfolio(){
    return (
        <><div className="app-container">
        <div className="background">
          <div className="content">
          <Navbar />
          <AboutMe />
          <div className="other-components">
         
      <Skills />
      <Education />
      <Work />
      <About />
      <Contact />
            </div>
          </div>
        </div>
        </div>
       
        </>
    )
}