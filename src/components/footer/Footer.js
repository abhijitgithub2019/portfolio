import React from 'react'
import './Footer.css';
const Footer = () => {
  const year = new Date();
  return (
    <footer>
      <a href='#'className='footer_logo'>Abhijit</a>
      <ul className='links'>
        <li><a href='#'> Home </a></li>
        <li><a href='#about'> About </a></li>
        <li><a href='#experience'> Experience </a></li>
        <li><a href='#portfolio'> Portfolio </a></li>
        <li><a href='#contact'> Contact </a></li>
      </ul>
      <div className="footer_copyright">
        <small>&copy; Abhijit Patra {year.getFullYear()} . All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;