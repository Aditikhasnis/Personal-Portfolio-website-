import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/Screenshot 2024-07-14 at 2.14.33 PM.png'
import Socials from './Socials'
import Typical from 'react-typical'
import { GrSteps } from 'react-icons/gr'
import { BiMoon } from "react-icons/bi";

const header = () => {
  return (
  <header>
        {/* <div className="mode">
      <BiMoon />

      </div> */}
    <div className="container header__container">
  
        <h3 className='typing-container'>Hello I'm</h3>
        <h1 className='typewriter'>Aditi khasnis</h1>
        <div className="profile-details-role">
            <h1 >
            <Typical
            loop={1}
                steps={
                   ["Competitive Programmer.",1000,"Deep Learning Enthusiast.",1000,"React Native Dev.",1000]
                }
            

            />
            </h1>
        </div>
        
        <CTA/>
        <Socials/>
        <div className='me'>
            <img src={ME} alt="me" />
        </div>

        
    </div>
  </header>
  )
}

export default header
