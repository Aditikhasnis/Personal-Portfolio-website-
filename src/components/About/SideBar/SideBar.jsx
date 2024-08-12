import React from 'react';
import { useState } from 'react';
import { FaTools } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import './SideBar.css';

const SideBar = ({ setActiveContent }) => {
  const [activeNav, setActiveNav] = useState('#skills');

  const handleNavigation = (id) => {
    setActiveNav(id);
    setActiveContent(id.substring(1)); // Remove the '#' to match the content state
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation('#skills');
            }}
            className={activeNav === '#skills' ? 'active' : ''}
          >
            <FaTools />

            Skills
          </a>
        </li>
        <li>
          <a
            href="#education"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation('#education');
            }}
            className={activeNav === '#education' ? 'active' : ''}
          >
          <FaBuildingColumns />
            Education
          </a>
        </li>
        <li>
          <a
            href="#exp"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              handleNavigation('#exp');
            }}
            className={activeNav === '#exp' ? 'active' : ''}
          >
            <FaLaptop />

            Experience
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
