
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y53mamg', 'template_iaoqpsf', form.current, {
        publicKey: 'KjTTu1irKalSCrUcj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="contact-form-content">
        <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label> */}
      <input type="text" name="user_name" placeholder='Enter Your Name' />
      {/* <label>Email</label> */}
      <input type="email" name="user_email" placeholder='Enter Your Email' />
      {/* <label>Message</label> */}
      <textarea name="message" placeholder='Write Your Messsage' />
      <input type="submit" value="Send" className='send' />
    </form>
    </div>
  )
}

export default ContactForm