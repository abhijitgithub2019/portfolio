import React from 'react';
import './Header.css';
import CTA from './CTA';
import me from '../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header>
        <div className="container header-container">
            <h5>Hello My name is : </h5>
            <h1> Abhijit Patra</h1>
            <h5 className='text-light'> Front End Engineer</h5>
            <CTA></CTA>
            <HeaderSocials></HeaderSocials>
            <div className="me">
                <img src={me} alt="profile_img"  className='img_me'/>
            </div>
           
        </div>
    </header>
  )
}

export default Header;