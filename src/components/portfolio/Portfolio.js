import React from 'react';
import './Portfolio.css';
import port1 from '../../assets/port1.png';
import port2 from '../../assets/port2.png';
import port4 from '../../assets/port4.jpeg';
import port5 from '../../assets/port5.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div id='port_about'>
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>
      </div>
    
      <div className="container portfolio_container">
        <article className="portfolio_iten">
          <div className="portfolio_image">
            <img src={port1} alt='port1' className='img_port' ></img>
          </div>
          <h3>Burger King</h3>
          <a href='https://github.com/abhijitgithub2019' className='btn' target='_blank'>GitHub</a>
          <a href='https://burger-78b6a.web.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className="portfolio_iten">
          <div className="portfolio_image">
            <img src={port2} alt='port1' className='img_port img2' ></img>
          </div>
          <h3>Comment Widget</h3>
          <a href='https://github.com/abhijitgithub2019' className='btn' target='_blank'>GitHub</a>
          <a href='https://commentwidgetabhijit.web.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className="portfolio_iten">
          <div className="portfolio_image">
            <img src={port4} alt='port1' className='img_port' ></img>
          </div>
          <h3>Mediakind</h3>
          <a href='#' className='btn' target='_blank'>GitHub</a>
          <a href='https://www.mediakind.com/mediafirst/' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className="portfolio_iten">
          <div className="portfolio_image">
            <img src={port5} alt='port1' className='img_port' ></img>
          </div>
          <h3>Video call</h3>
          <a href='https://github.com/abhijitgithub2019/PatraVideoCall' className='btn' target='_blank'>GitHub</a>
          <a href='https://gitHub.com' className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;