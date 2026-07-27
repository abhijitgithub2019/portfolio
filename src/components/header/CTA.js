import React from 'react'
import resume from '../../assets/resume.pdf';
const CTA = () => {
  return (
   <div className="CTA">
    <a href={resume} download className='btn'> Download Resume</a>
    <a href='#contact' className='btn btn-primary'> Lets's talk</a>
   </div>
  )
}

export default CTA