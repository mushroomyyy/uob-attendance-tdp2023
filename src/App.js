import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './App.css';
import ContactForm from './Contactform';
import Companylogo from './sik pic.png';

function App() {
  return (
    <div className="App">
      <h1 style={{color: "grey",
      backgroundColor: "lightblue"}}>Link Access to Training Attendance <Badge bg="secondary">Version 1.1</Badge></h1>
      <h2 style={{backgroundColor: "light grey"}}>For the Software Development Track</h2>
      <img className='photo' src={Companylogo} alt="UOB Huat"/>
      <div className='padding'></div>
      <ContactForm/>
      
      

      
      <h3>*Note that if you input the session timing incorrectly,</h3>
      <h3>the link will be invalid and the QR code will not appear!</h3>
      

    </div>
  );
}

export default App;
