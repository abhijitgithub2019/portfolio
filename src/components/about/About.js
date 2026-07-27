import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpeg';
import {FaAward, FaUsers, FaFolderOpen} from 'react-icons/fa';

const About = () => {
  return (
   <section id='about'>
    <div id='about_me'>
    <h5>Get to know</h5>
    <h2>About Me</h2>
    </div>
    <div className="container about-container">
      <div className="about-me">
      <div className="about-image_me">
           <img src={ME} alt='me' className='img_about'></img>
        </div>
      </div>
      <div className="about-content">
        <div className="about-cards">
          <article className='about-card'>
            <FaAward className='about-icon'></FaAward>
            <h5>Experience</h5>
            <small> 10+ Years Work</small>
          </article>
          <article className='about-card'>
            <FaUsers className='about-icon'></FaUsers>
            <h5>Company</h5>
            <small>4</small>
          </article>
          <article className='about-card'>
            <FaFolderOpen className='about-icon'></FaFolderOpen>
            <h5>Projects</h5>
            <small>15+ completed</small>
          </article>
        </div>
        <p>
        Focused professional with 10+ years of experience and proven knowledge of web
platform development and programming. Aiming to leverage my skill to successfully
fill the front-end engineer role at your company.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's talk</a>
      </div>
    </div>
   </section>
  )
}

export default About;