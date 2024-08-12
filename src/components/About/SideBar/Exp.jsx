import React from 'react'
import SideBar from './SideBar'
import pes from '../../../assets/pesLogo.png'
import  ieee from '../../../assets/ZPQNq5AG_400x400.jpg'

const Exp = () => {
  return (
   <div>
      <div  className='timeline-item-Exp'>
      <div className='timeline-dot'></div>
        <div className='timeline-date Internship' > April 2023 - Sept 2023</div>
       
        <div className="timeline-content">
        <img  className="pes"src={ieee} alt=""/>
          <div className='text'>
          <h3>
            IEEE 
          </h3>
          <p className='text2'>
           <strong><span >Internship</span></strong> 
            <div>
          <ul style={{ listStyleType: 'disc' }} >
            <li>
            - As a research intern, I analyzed time series data of patients diagnosed with bipolar disorder on an hourly basis.
            </li>
            <li>
            - Deployed models like the random forest, BOSSV, and Time Series forest, achieving an impressive benchmark
            accuracy rate of 81%
            </li>
            <li>
            - Presented  a paper in the 8th International IEEE conference mentioned in the publication section
            </li>
          </ul>
</div>
          </p>
          </div>
        </div>
        <div className='timeline-date Internship' > july 2024 - Present</div>
        <div className="timeline-content">
        <img  className="pes"src={pes} alt=""/>
          <div className='text'>
          <h3>
            PES University
          </h3>
          <p className='text2'>
           <strong><span >Teaching Assistant</span></strong> 
            <div>
              <p> As a Data Structures Lab  TA , designed Ticking sessions every week consisting of questions and test cases with Prof Nazmin Begum. </p>
</div>
          </p>
          </div>
        </div>
      
    </div>
   </div>
  )
}

export default Exp
