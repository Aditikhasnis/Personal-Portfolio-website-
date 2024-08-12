import React, { useState } from 'react';
import './About.css';
import SideBar from './SideBar/SideBar';
import Skills from './SideBar/skills'; // Import Skills component
import Education from './SideBar/Education'; // Import Education component
import Experience from './SideBar/Exp'; // Import Experience component

const About = () => {
  const [activeContent, setActiveContent] = useState('');

  const renderContent = () => {
    switch (activeContent) {
      case 'skills':
        return <Skills />;
      case 'education':
        return <Education />;
      case 'exp':
        return <Experience />;
        default:
            return <Skills />;
    }
  };

  return (
    <section id='About'>
      <h2>About Me</h2>
      
      <div className='container about__container'>
        <div className='about__content'>
          <h3>
            I'm currently pursuing BTech in Computer Science at PES University. I am passionate about machine learning and Java development and interested in building web interfaces and backends. I have experience in working on time series analysis. Additionally, I am familiar with the Neo4j database which is a part of graph theory, and have worked on social network analysis, among other projects.
          </h3>
          {renderContent()}
        </div>

       
        <SideBar setActiveContent={setActiveContent} />
      </div>
    </section>
  );
};

export default About;