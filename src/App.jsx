import React from 'react';
import Header from './components/header/header'; // Correct casing
import Nav from './components/nav/nav'; // Correct casing
import About from './components/About/About';
import Project from './components/projects/project'; // Correct casing
import Experience from './components/Experiance/Experiance'; // Correct casing
import Footer from './components/footer/footer'; // Correct casing
import Publication from './components/publications/publication';
import Contact from './components/contact/Contact'; // Correct casing
import { BiMoon } from "react-icons/bi";
import { BsFillMoonFill } from "react-icons/bs";


const App = () => {
  return (
    <>
{/* <div className="mode" style={{
    position: 'absolute',
    top: '0',
    right: '0',
    marginTop: '0rem',
    height: '5rem',
    marginRight: '2rem',  // Adjust for desired distance from right edge
    fontSize: 'large',
    borderRadius: '1rem',
    boxShadow: '0 1rem 1.5rem rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    backgroundColor: '#000000',  // Adjust as needed
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}}><BsFillMoonFill /></div> */}
     
      <Header />
      <Nav />
      <About />
      
      <Project />
      <Publication />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;