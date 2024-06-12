// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./Navbar";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import Work from "./Work"
import About from "./About"
import Contact from "./Contact"

function App() {

  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <Education />
      <Work />
      <About />
      <Contact />
    </>
  )
}

export default App
