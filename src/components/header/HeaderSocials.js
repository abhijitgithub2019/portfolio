import React from "react";
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {SiLeetcode, SiBlogger} from 'react-icons/si';
const HeaderSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/abhijitpatra1/" target="_blank">
        <BsLinkedin/>
      </a>
      <a href="https://github.com/Abhi2019" target="_blank">
       <BsGithub/>
      </a>
      <a href="https://leetcode.com/Abhijit2019/" target="_blank">
     <SiLeetcode></SiLeetcode>
      </a>
      <a href="https://abhijitpatra.wordpress.com/" target="_blank">
      <SiBlogger/>
      </a>
    </div>
  );
};

export default HeaderSocials;
