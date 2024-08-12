import React from 'react'
import './project.css'
import { FaGithub } from "react-icons/fa6";
import tour from '../../assets/tourBuddy.png'
import interior from '../../assets/Interior design.png'
import dis from '../../assets/SocialDistancing.png'
import fastion from '../../assets/Fastion.png'
import repo from '../../assets/GitSumm.png'
import crime from '../../assets/portfolio.png'
import { FaReact } from "react-icons/fa";

const project = () => {
  return (
    <section id='Projects'>
      <h2>
        Projects
      </h2>

       <div className='portfolio__container'>
<article className='portfolio__item'>
<div className="portfolio__items-image">
  <img src={tour} alt="tour" />
</div>
  <h3>
    Tour Buddy
  </h3>
  <a href="https://github.com/Aditikhasnis/TourBuddy" className='btn'><FaGithub /></a>
  {/* <p>
 This is travel and tourism project integrated with mysql backend 
  <button className='btnProject'> Java|SpringBoot|Gradle|Maven|Html/CSS</button> 
  </p>  */}

</article>
      
      
<article className='portfolio__item'>
<div className="portfolio__items-image">
  <img src={interior} alt="tour" />
</div>
  <h3>
    Hestia Interiors
  </h3>
  <a href="https://github.com/Aditikhasnis/INTERIOR-DESIGN" className='btn'><FaGithub /> 
  </a>
  {/* <p>
  This  project helps people find interior their designs that match their style and taste build using 
  <button className='btnProject'> Reactjs|Nodemon|ExpressJS|MongoDB</button> 
  </p> */}

</article>
      
      
<article className='portfolio__item'>
<div className="portfolio__items-image">
  <img src={dis} alt="tour" />
</div>
  <h3>
    Social-Distancing-Detector
  </h3>
  <a href="https://github.com/Aditikhasnis/Social-Distancing-Dectotor-" className='btn'><FaGithub /></a>
  

</article>
  
<article className='portfolio__item'>
<div className="portfolio__items-image">
  <img src={fastion} alt="tour" />
</div>
  <h3>
    Content Based Information Retrival
  </h3>
  <a href="https://github.com/Aditikhasnis/Content-Based-Information-Retrival-System-" className='btn'><FaGithub /></a>
  

</article>
  
<article className='portfolio__item'>
<div className="portfolio__items-image">
  <img src={repo} alt="tour" />
</div>
  <h3>
   RepoGaze
  </h3>
  <a href="https://github.com/Aditikhasnis/Content-Based-Information-Retrival-System-" className='btn'><FaGithub /></a>
  

</article>
 
<article className='portfolio__item'>
<div className="portfolio__items-image">
  <img src={crime} alt="tour" />
</div>
  <h3>
    Portfolio-Website
  </h3>
  <a href="https://github.com/Aditikhasnis/Portfolio" className='btn'><FaGithub /></a>
  

</article>
      </div>
     
      
    </section>
  )
}

export default project
