import React from 'react';
import './GenericInfo.css'; 

const GenericInfo = () => {
  
  const handleEmail = () => {
    window.open('mailto:Freddeselektronik@gmail.com', '_blank');
  }

  return (
    <div className="contact-container">
      <h1>Other Information</h1>
      <h2 className="contact-title">Frequently Asked Questions:</h2>

      <h4>When will I receive my order?</h4>
      <p>We have a delivery time of 1-3 days provided that the item is in stock. Orders placed with express delivery, between Monday - Thursday before 12:00 PM, are shipped the same day.</p>
      <br></br>

      <h4>How do I track my package?</h4>
      <p>We send a delivery confirmation via email when the package leaves our warehouse.</p>
      <p>If you have not received the SMS notification for your order, you can use the package's tracking number to schedule delivery or pick up your package. You can find this in the Posten app.</p>
      <br></br>

      <h4>I haven't received the SMS notification</h4>
      <p>If you have not received the SMS notification for your order, you can use the package's tracking number to schedule delivery or pick up your package. You can find this in the Posten app.</p>
      <br></br>

      <h3>Did you get an answer to your question?</h3>
      <br></br>
      <h5>If you still have questions, you can contact us through the options below.</h5>
      <br></br>
      <p>Phone: 031-7xx xx xx</p>
      <p>Open weekdays: 09:00 AM - 5:00 PM.</p>
      <p>or</p>
      <p>Email us by clicking the button below.</p>
      <br></br>
      <button className="contact-button" onClick={handleEmail}>Email us</button>
    </div>
  );
}

export default GenericInfo;
