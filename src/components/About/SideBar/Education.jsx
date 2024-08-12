import React from 'react'
import pes from '../../../assets/pesLogo.png'
import kle from '../../../assets/Kle.png'
import bips from '../../../assets/bips.png'
import SideBar from './SideBar'
import { BiColor } from 'react-icons/bi'
const Education = () => {
  return (
    <div id='education'>
      <div  className='timeline-item'>
      <div className='timeline-dot'></div>
        <div className='timeline-date expected' > Expected 2025</div>
        <div className="timeline-content">
          <img  className="pes"src={pes} alt=""/>
          <div className='text'>
          <h3>
            Pes University
          </h3>
          <p className='text2'>
           <strong><span >GPA : 8.7 /10</span></strong> 
            <div>
            Coursework: Cloud computing, object-oriented programming and design patterns, Data analytics, Deep learning,
Graph theory, Data structures and Algorithms, and Information retrieval.
</div>
          </p>
          </div>
        </div>
      
      
    </div>
    <div className="timeline-item">
    <div className='timeline-dot'> </div>
        <div className='timeline-date'>2019-2021</div>
        <div className="timeline-content">
          <img  className="kle"src={kle} alt=""/>
          <div className='text'>
          <h3>
            KLE Institute 
          </h3>
          <p className='text2'>
           <strong><span >Boards:99%  | JEE Mains:94%</span></strong> 
            <div>
      KLE Prerana Hubballi Karnataka 
</div>
          </p>
          </div>
        </div>
     
    </div>

    <div className="timeline-item">
    <div className='timeline-dot'></div>
        <div className='timeline-date'>2009-2019</div>
        <div className="timeline-content">
          <img  className="kle"src={bips} alt=""/>
          <div className='text'>
          <h3>
            BIPS 
          </h3>
          <p className='text2'>
           <strong><span >Boards:94%</span></strong> 
            <div>
      Basaweshwara International Public School,Central Board for Secondary Education 
      Bagalkot ,Karnataka
</div>
          </p>
          </div>
        </div>
      
    </div>
    </div>
  )
}

export default Education
