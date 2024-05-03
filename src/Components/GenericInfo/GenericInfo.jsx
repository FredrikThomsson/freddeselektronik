import React from 'react';
import { Link } from 'react-router-dom'; 
import './GenericInfo.css'; 
const GenericInfo = () => {
  
  const handleEmail = () => {
    window.open('mailto:Freddeselektronik@gmail.com', '_blank');
  }

  return (
    <div className="contact-container">
      <h1>Välkommen till övrig information</h1>
      <h2 className="contact-title">Vanliga frågor:</h2>

      <h4>När får jag min beställning?</h4>
      <p>Vi har 1-3 dagars leveranstid förutsatt att varan finns i lager. Order som beställs med expressleverans, mellan måndag - torsdag innan kl. 12.00 skickas samma dag.</p>
      <br></br>

      <h4>Hur spårar jag mitt paket</h4>
      <p>Vi skickar en leveransbekräftelse via e-post när paketet lämnar vårt lager. </p>

      <p>Har du inte mottagit SMS-aviseringen för din order kan du använda paketets kollinummer för att boka leverans eller hämta ut ditt paket. Detta finner du i Postens app.</p>
      <br></br>

      <h4>Jag saknar sms aviseringen</h4>
      <p>Har du inte mottagit SMS-aviseringen för din order kan du använda paketets kollinummer för att boka leverans eller hämta ut ditt paket. Detta finner du i Postens app.</p>
      <br></br>


      <h3>Fick du svar på din fråga?</h3>
      <br></br>
      <h5>Om du fortfarande har frågor kan du kontakta oss genom alternativen nedan. </h5>
      <br></br>
      <p>Telefon: 031-7xx xx xx</p>
      <p>Öppen helgfria vardagar: 09:00 - 17:00.</p>
      <p> eller </p>
      <p>Maila oss genom att trycka på knappen nedan.</p>
      <br></br>
      <button className="contact-button" onClick={handleEmail}>Maila oss</button>
    </div>
  );
}

export default GenericInfo;
