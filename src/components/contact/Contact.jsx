import React, { useRef } from 'react'
import './Contact.css'
import { IoMdMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mjvrmwh', 'template_azmmm37', form.current,'BdyI4B033667oD7Vg')
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message Sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='Contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>
       <div className="container__contact">
        <div className="contact__options">

       
        <article className="contact__option">
        <IoMdMail />
          <h4>Email</h4>
          <h5 className='email'>khasnisaditi@gmail.com</h5>
          <a href="mailto:khasnisaditi@gmail.com" target='_blank'> Send a Message</a>
        </article>
        <article className="contact__option">
        <FaTelegram />


          <h4>Telegram</h4>
          <h5>Aditi Anand</h5>
          <a href="https://web.telegram.org/k/#@gudd2003" target='_blank'> Send a Message</a>
        </article>
        <article className="contact__option">
        <FaLinkedin />



          <h4>LinkedIn</h4>
          <h5>Aditi Anand</h5>
          <a href="https://www.linkedin.com/in/conatct-aditi/" target='_blank'> Send a Message</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='example@gmail.com' required/>
          <textarea name="message" id="" rows="7"  placeholder='Your Message'></textarea>
          <button type='submit' className='btnSent' value="Send"> Send a message</button>
        </form>
        
       </div>
    
    </section>
  )
}

export default Contact
