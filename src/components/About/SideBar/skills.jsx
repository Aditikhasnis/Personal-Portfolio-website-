import React from 'react'
import code from '../../../assets/code.png'
import SideBar from './SideBar'
import java from '../../../assets/java.png'
import python from '../../../assets/python.png'
import other from '../../../assets/other.jpg'
import soft from '../../../assets/soft.png'
import code2 from '../../../assets/code.jpeg'
const skills = () => {
  return (
    <div id='skills'>
       <div className="timeline-item">
    <div className='timeline-dot'> </div>
        <div className='timeline-date'></div>
        <div className="timeline-content">
          <img  className="kle"src={code2} alt="kle"/>
          <div className='text'>
          <h3>
            Technical Skills
          </h3>
          <p className='text2'>
          {/* <img  className="kle"src={java} alt="kle"/>
          <img  className="kle"src={python} alt="kle"/> */}
           <strong><span >
            C , Java , Python , Html , CSS , Sql , TensorFlow , Pytorch ,Sklearn ,React.js ,Express.js ,Node.js </span></strong> 
            
          </p>
          </div>
        </div>
    </div>

    <div className="timeline-item">
    <div className='timeline-dot'> </div>
        <div className='timeline-date'></div>
        <div className="timeline-content">
          <img  className="kle"src={other} alt="kle"/>
          <div className='text'>
          <h3>
            Framiliar
          </h3>
          <p className='text2'>
          {/* <img  className="kle"src={java} alt="kle"/>
          <img  className="kle"src={python} alt="kle"/> */}
           <strong><span >
           R programming ,Jenkins ,AWS console ,Docker,Spring Boot. 
             </span></strong> 
            
          </p>
          </div>
        </div>


        
     
    </div>

    <div className="timeline-item">
    <div className='timeline-dot'> </div>
        <div className='timeline-date'></div>
        <div className="timeline-content">
          <img  className="kle"src={soft} alt="kle"/>
          <div className='text'>
          <h3>
            Soft Skills
          </h3>
          <p className='text2'>
          {/* <img  className="kle"src={java} alt="kle"/>
          <img  className="kle"src={python} alt="kle"/> */}
           <strong><span >
           Leadership , Teamwork, Communication, Analytic.
             </span></strong> 
            
          </p>
          </div>
        </div>


        
     
    </div>
    </div>
  )
}

export default skills
