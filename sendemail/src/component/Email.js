import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Email.css'

export const Email = () => {
const [object,setObject] =useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_4xx5fzq', form.current, 'zcVknxw-uhLECIoSj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      console.log(object);

  };

  return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" /><br/>
        <label>subject</label>
        <input type="text" name="subject" /><br/>
        <label>Email</label>
        <input type="text" name="email" /><br/>
        <label>Message</label>
        <textarea name="message" /><br/>
        <input type="submit" value="Send" />
        </form>

       
    </div>
  )
}
