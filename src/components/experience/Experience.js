import React from 'react';
import './Experience.css';
import {AiFillCheckCircle} from 'react-icons/ai';
const Experience = () => {
  return (
    <section id='experience'>
      <div className='exp_header'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      </div>
      <div className="container experience_container">
        <div className="experience_front">
          <h3>Frontend Developement</h3>
            <div className="experience_content">
              <article className='experience_details'>
                  <AiFillCheckCircle className='experience_icon'></AiFillCheckCircle>
                  <div className='details'>
                  <h4> React Js</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience_details'>
                  <AiFillCheckCircle className='experience_icon'></AiFillCheckCircle>
                  <div className='details'>
                  <h4> Redux </h4>
                  <small className='text-light'>Experienced</small>
                  </div>
              </article>
              <article className='experience_details'>
                  <AiFillCheckCircle className='experience_icon'></AiFillCheckCircle>
                  <div className='details'><h4> JavaScript</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience_details'>
                  <AiFillCheckCircle className='experience_icon'></AiFillCheckCircle>
                  <div className='details'><h4> HTML</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience_details'>
                  <AiFillCheckCircle className='experience_icon'></AiFillCheckCircle>
                  <div className='details'><h4> CSS</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience_details'>
                  <AiFillCheckCircle className='experience_icon'></AiFillCheckCircle>
                  <div className='details'><h4> Node JS</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience_details'>
                  <AiFillCheckCircle className='experience_icon'></AiFillCheckCircle>
                  <div className='details'> <h4> Unit Test Case</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience_details'>
                  <AiFillCheckCircle className='experience_icon'></AiFillCheckCircle>
                  <div className='details'><h4> Webpack</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience_details'>
                  <AiFillCheckCircle className='experience_icon'></AiFillCheckCircle>
                  <div className='details'><h4> DS && Algo</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;