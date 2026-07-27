import React, { useState } from 'react';
import './Nav.css';
import {AiFillHome, AiOutlineUser} from 'react-icons/ai';
import {BiBookAlt, BiSolidContact} from 'react-icons/bi';
import {FcServices} from 'react-icons/fc';

const Nav = () => {
  const [activeNav, setActive] = useState('#');
  return (
   <nav>
      <a href='#' onClick={()=> setActive('#')} className={activeNav ==='#'? 'active' : ''}> <AiFillHome></AiFillHome></a>
      <a href='#about' onClick={()=> setActive('#about')} className={activeNav ==='#about'? 'active' : ''}> <AiOutlineUser></AiOutlineUser></a>
      <a href='#experience' onClick={()=> setActive('#experience')} className={activeNav ==='#experience'? 'active' : ''}> <BiBookAlt></BiBookAlt></a>
      <a href='#portfolio' onClick={()=> setActive('#portfolio')} className={activeNav ==='#portfolio'? 'active' : ''}> <FcServices></FcServices></a>
      <a href='#contact' onClick={()=> setActive('#contact')} className={activeNav ==='#contact'? 'active' : ''}> <BiSolidContact></BiSolidContact></a>
   </nav>
  )
}

export default Nav;