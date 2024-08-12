import React from 'react'
import './Experiance.css'
import award from '../../assets/Award.png'
const Experiance = () => {
  return (
    <section id='Experiance'>
     <h2>Honours and Awards</h2>
     <div className="container testimonials__container">
      <article className='testimonial'>
           <div className="client__avatar">
            <img src={award} alt="" />
            </div>
            <h2 className='clients__name'>16-hr Ideathon</h2>
           
            <h3 className='clients__review'>
            Ranked top 4 out of 100+ teams in a Healthspark robotics ideathon, designed a medicine cart prototype for
            precise medication management in hospitals and reduce administrative errors.
            </h3>
           
      </article>
     </div>

    </section>
  )
}

export default Experiance
