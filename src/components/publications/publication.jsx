import React from 'react'
import './publication.css'
import explore from '../../assets/xpl.png'
import { FaArrowRight } from "react-icons/fa";
import front from '../../assets/Front.png'
import con from '../../assets/Connit.png'
const publication = () => {
  return (
    <section id='Publications'>
      <h2>Publications</h2>
             <div className="timeline-item">
    <div className='timeline-dot'> </div>
        <div className='timeline-date'></div>
        <div className="timeline-content">
          <img  className="kle"src={explore} alt="kle"/>
          <div className='text'>
          {/* <h3>
            Technical Skills
          </h3> */}
          <p className='text2'>
          {/* <img  className="kle"src={java} alt="kle"/>
          <img  className="kle"src={python} alt="kle"/> */}
          
                    
           <strong><span >
           MediBot: Revolutionizing Healthcare Medication Management and Smart Cart Facility IEEE 2024 4th Interna-
           tional Conference for Intelligent Technologies (CONIT), Hubballi, Karnataka (Accepted) </span></strong> 
            
          </p>
       
          <div className='connit-img'>
            <img src={front} alt="" />
            <img src={con} alt="" />
          </div>
          <a  className="arrow"href="https://drive.google.com/file/d/1qTwimdNDDgUuIBpd9AFJkthwRLoyAX7E/view"><FaArrowRight />
          </a>
          </div>
        </div>
    </div>

    <div className="timeline-item ">
    <div className='timeline-dot'> </div>
        <div className='timeline-date'></div>
        <div className="timeline-content">
          <img  className="kle"src={explore} alt="kle"/>
          <div className='text'>
          {/* <h3>
            Technical Skills
          </h3> */}
          <p className='text2'>
          {/* <img  className="kle"src={java} alt="kle"/>
          <img  className="kle"src={python} alt="kle"/> */}
           <strong><span >
           Predicting the Depression based on Motor Activity of Individuals using Time Series Forest Classifier IEEE 2024
           International Conference CONECCT’24 (Accepted)
 </span></strong> 
            
          </p>

          </div>
        </div>
    </div>
    </section>
  )
}

export default publication
