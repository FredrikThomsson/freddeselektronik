import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Contact.css'; // Import your Contact component CSS file

const Contact = () => {
  // Define functions inside the component or import them if necessary
  const handleChat = () => {
    // Handle chat functionality
  }

  const handleEmail = () => {
    window.location.href = 'mailto:Freddeselektronik@gmail.com';
  }

  const handleOther = () => {
    // Handle other information functionality
  }

  return (
    <div className="contact-container">
      <h1>Välkommen till Kundservice</h1>
      <h2 className="contact-title">Vad kan vi hjälpa dig med?</h2>

     
        <h4>FRI FRAKT</h4>
        <p>Hos oss får du fri frakt med billigaste fraktalternativet på alla ordrar över 500 kronor. Vi erbjuder dessutom flera olika tillval i form av till exempel paketskåp- eller hemleverans. Läs mer under övrig information.</p>
        <br></br>
  

    
        <h4>ÖPPET KÖP I 60 DAGAR</h4>
        <p>Vi erbjuder dig 60 dagars öppet köp. Om du av någon anledning ångrar dig så har du utöver 14 dagars ångerrätt även 60 dagars öppet köp. Läs mer under övrig information.</p>
        <br></br>
     
      
        <h4>FRI RETUR</h4>
        <p>Vid både öppet köp och ångerrätt så står vi för alla fraktkostnader. Skapa enkelt ett returärende så får du en fraktsedel av oss, så att du snabbt och enkelt kan returnera din vara. Läs mer Läs mer under övrig information.</p>
        <br></br>
  
        <div className="contact-info">
        <h3>Kontakta oss</h3>
        <p>Telefon Öppen helgfria vardagar: 09:00 - 17:00. Telefon: 031-7xx xx xx</p>
      </div>

      <div className="button-container">
        <button className="contact-button" onClick={handleEmail}>Maila oss</button>
        <Link to="/generic-info">
          <button className="contact-button">Övrig information</button>
        </Link>
      </div>

      
    </div>
  );
}

export default Contact;