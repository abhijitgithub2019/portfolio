import React, { useRef, useState } from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FiPhoneCall} from 'react-icons/fi';
import emailjs from 'emailjs-com';
import PopUp from '../popUp/PopUp';
import './Contact.css';

const Contact = () => {
  const [popUp, setPopUp] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8ngsu7g', 'template_hrrt51s', form.current, 'zH404B9AMGquT_BIP')
      .then((result) => {
          console.log(result.text);
          setPopUp(true);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const close = ()=>{
    setPopUp(false);
  }

  return (
    <section id="contact">
      <div id='contact_about'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      </div>
     
      <div className="container contact_conatiner">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className='img_contact'></AiOutlineMail>
            <h4>Email</h4>
            <h5>abhijit.patra224@gmail.com</h5>
            <a href="mailto:abhijit.patra224@gmail.com">Send an Email</a>
          </article>
          <article className="contact_option">
            <FiPhoneCall className='img_contact'></FiPhoneCall>
            <h4>Contact</h4>
            <h5>+919916762018</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Enter your email "
          required
        ></input>
        <textarea name='message' rows="7" placeholder='Enter your message here' required>
        </textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
      {popUp ? <PopUp close={close}></PopUp> : " " }
    </section>
  );
}

export default Contact;