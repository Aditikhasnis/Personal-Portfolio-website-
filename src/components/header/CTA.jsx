import React from 'react'
import CV from '../../assets/Aditi Resume21.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download={CV} className='btn btn-primary'>Download CV</a>
      <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
