import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Email.css'

export const Email = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current.name.value);
    const templateParams = {
      name: 'James',
      message: 'Check this out!',
      object : 'hiroshachandramal01@gmail.com gethmakadisanayaka@gmail.com'
  };
   
  emailjs.send('gmail', 'template_4xx5fzq', templateParams,'zcVknxw-uhLECIoSj')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
      
  };

  return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
        {/* <label>Name</label>
        <input type="text" name="name" /><br/>
        <label>Subject</label>
        <input type="text" name="subject" /><br/>
        <label>Email</label>
        <input type="text" name="email" /><br/>
        <label>Message</label>
        <textarea name="message" /><br/> */}
        <input type="submit" value="Send" />
        </form>
       
    </div>
  )
}

