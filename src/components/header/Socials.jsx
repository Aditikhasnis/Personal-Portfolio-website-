import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IoMdMail } from "react-icons/io";
const Socials = () => {
  return (
    <div className='header__social'>
      <a href="https://www.linkedin.com/in/conatct-aditi/" target='_blank'><FaLinkedin/></a>
      <a href="https://github.com/Aditikhasnis" target='_blank'><FaGithub/></a>
         <a href=" "><IoMdMail />
         </a>
    </div>
  )
}

export default Socials
