import React from 'react';
import { Link } from 'react-router-dom'; 
import './Contact.css'; 

const Contact = () => {

  const handleEmail = () => {
    window.location.href = 'mailto:Freddeselektronik@gmail.com';
  }

  return (
    <div className="contact-container">
      <h1>Welcome to Customer Service</h1>
      <h2 className="contact-title">How can we assist you?</h2>

      <h4>FREE SHIPPING</h4>
      <p>We offer free shipping with the cheapest shipping option on all orders over 500 SEK. We also offer several additional options such as parcel locker or home delivery. Read more under other information.</p>
      <br></br>

      <h4>60 DAYS RETURN POLICY</h4>
      <p>We offer a 60-day return policy. If for any reason you change your mind, in addition to the 14-day right of withdrawal, you also have a 60-day return policy. Read more under other information.</p>
      <br></br>

      <h4>FREE RETURNS</h4>
      <p>For both the return policy and the right of withdrawal, we cover all shipping costs. Simply create a return case and you will receive a shipping label from us so you can quickly and easily return your item. Read more under other information.</p>
      <br></br>

      <div className="contact-info">
        <h3>Contact us</h3>
        <p>Phone open weekdays: 09:00 - 17:00. Phone: 031-7xx xx xx</p>
      </div>

      <div className="button-container">
        <button className="contact-button" onClick={handleEmail}>Email us</button>
        <Link to="/generic-info">
          <button className="contact-button">Other information</button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
