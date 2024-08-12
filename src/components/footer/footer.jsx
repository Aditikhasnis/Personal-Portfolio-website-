import React from 'react'
import './footer.css'
import { IoMdMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const footer = () => {
  return (
    <footer>
      <h1 className='footer__name'>Aditi</h1>
      <a href="#" className='footer__logo'></a>
      <ul className='permalinks'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experiance">Experiance</a>
        </li>
        <li>
          <a href="#Publications">Publication</a>
        </li>
        <li>
          <a href="#Projects">Project</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>

      </ul>
      <div className="footer__socials">
      <a href="mailto:khasnisaditi@gmail.com" target='_blank'> <IoMdMail /></a>
      <a href="https://web.telegram.org/k/#@gudd2003" target='_blank'> <FaTelegram /></a>
      <a href="https://www.linkedin.com/in/conatct-aditi/" target='_blank'>     <FaLinkedin /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Aditi ,All rights reserved </small>
      </div>
    </footer>
  )
}

export default footer
