import React from 'react';
import '../css/MainStyle.css';
import '../css/Contacts.css'; 
import { Link } from 'react-router-dom';
import logoImage from '../Images/Logo.png';
import LoginLogo from '../Images/LoginLogo.png';
import CartLogo from '../Images/CartLogo.png';
import Design from '../Images/Design.png';
import IceCupImage from '../Images/IceCup.png'; 
import FacebookImage from '../Images/facebook.png'; 
import Background from '../Images/background.png';
import CupcakeImage from '../Images/Cupcake.png'; 
import AboutUsLogo from '../Images/AboutUsLogo.JPG'; 

const contactus = () => {
  return (
    <>
      <nav>
        <div className="Logo">
          <img src={logoImage} alt="Golden Bakes 'N Crafts Logo" className="Logo_img" />
        </div>
        <div className="button-container">
        <Link to="/" className="btn-home">
            <button>Home</button>
          </Link>
          <Link to="/Menu" className="btn-menu">
            <button>Menu</button>
          </Link>
          <Link to="/AboutUs" className="btn-aboutus">
            <button>About Us</button>
          </Link>
          <button className="btn-contactus current">Contact Us</button>
          <img src={LoginLogo} alt="Login Logo" className="button-link" />
          <img src={CartLogo} alt="Cart Logo" className="button-links" />
        </div>
      </nav>

      <hr />

      <div className="image-container">
        <img src={Background} alt="Background" className="background-image" />
        <div className="text-overlays">
          <p className="image-text-menu">Contact Us</p>
        </div>
      </div>

      <hr style={{ marginTop: '1%' }} />

        <div className="text">
      <h2 className="custom-h2" style={{ marginLeft: '70%', marginTop: '50px' }}>
        CONTACT US
      </h2>
      <p className="custom-p" style={{ marginLeft: '63%' }}>
        We want to hear from you, write us:
      </p>
    </div>


      <div class="white">
      <div class="row">
        <div class="column">
            <img src= {AboutUsLogo} alt='AboutUsLogo' /> 
        </div>
        
        <div class="column">
        <form>
                <input type="text" id="Name" name="Name" placeholder="Name" required />
                <input type="text" id="Email" name="Email" placeholder="Email" required />
                <input type="text" id="Phone" name="Phone" placeholder="Phone" required />
                <textarea id="subject" name="subject" placeholder="Type your message here.." style={{ height: '170px' }} required></textarea>
                <input type="submit" value="Submit" />
        </form>
        </div>
    </div>
    </div>
    <div class="Map">
    <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1932.5603006079582!2d121.04822874713436!3d14.362431885948459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1062f7205bf%3A0xa3823264fd899d8b!2sUnited%20San%20Pedro%20-%20subdivision!5e0!3m2!1sen!2sph!4v1697803666723!5m2!1sen!2sph"
        width="1262"
        height="400"
        style={{ marginTop: '2%', marginLeft: '30px' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
   
   
      <div className="center-container">
        <div className="Design">
        <img src={Design} alt="Design" className="Design_img" />
        </div>
      </div>

      <div className="FooterLogo" style={{ textAlign: 'center' }}>
        <img src={IceCupImage} alt="IceCup Logo" className="Icecup_img" />
        <p className="Icecuptext">
          Like &<br /> Follow Us
        </p>
        <div className="facebook">
          <a href="https://www.facebook.com/GoldenBakesNCraftsPH" className="FacebookLogo">
            <img src={FacebookImage} alt="facebook" className="facebook_img" />
          </a>
        </div>
        <div className="CupcakeLogo" style={{ textAlign: 'center' }}>
          <img src={CupcakeImage} alt="Cupcake Logo" className="Cupcake_img" />
          <p className="Cupcaketext">
            Come Visit<br /> Us </p>
            <div className="viewinthemap">
            <Link to="/ContactUs">
              View in the map
            </Link>
            </div>
        </div>
      </div>
    </>
  );
};


export default contactus;