import React from 'react'
import { IoMdHome } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CgAwards } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { GiBookmark } from "react-icons/gi";
import { FiMessageCircle } from "react-icons/fi";
import { useState } from 'react';
import './nav.css'
const Nav = () => {
    const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
  <a href="#" className={activeNav=='#' ? 'active' : ''}><IoMdHome /></a>
  <a href="#About" onClick={()=>setActiveNav('#About') } className={activeNav=='#About' ?'active':''}><CiUser /></a>

  <a href="#Projects" onClick={()=>setActiveNav('#Projects') } className={activeNav=='#Projects' ?'active':''}><FaCode /></a>
  <a href="#Publications"onClick={()=>setActiveNav('#Publications') } className={activeNav=='#Publications' ?'active':''}><GiBookmark /> </a>
  <a href="#Experiance" onClick={()=>setActiveNav('#Experiance') } className={activeNav=='#Experiance' ?'active':''}><CgAwards />  </a>
  <a href="#Contact" onClick={()=>setActiveNav('#Contact') } className={activeNav=='#Contact' ?'active':''}><FiMessageCircle />
  </a>
  
    </nav>
  )
}

export default Nav
