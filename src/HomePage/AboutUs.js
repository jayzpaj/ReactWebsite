import React from 'react';
import '../css/MainStyle.css';
import '../css/AboutUs.css'; 
import { Link } from 'react-router-dom';
import logoImage from '../Images/Logo.png';
import LoginLogo from '../Images/LoginLogo.png';
import CartLogo from '../Images/CartLogo.png';
import Design from '../Images/Design.png';
import IceCupImage from '../Images/IceCup.png'; 
import FacebookImage from '../Images/facebook.png'; 
import Background from '../Images/background.png';
import CupcakeImage from '../Images/Cupcake.png'; 
import whitebg from '../Images/whitebg.jpg'; 
import AboutUsLogo from '../Images/AboutUsLogo.JPG'; 
import developer1 from '../Images/developer1.jpg';
import developer2 from '../Images/developer2.jpg';
import developer3 from '../Images/developer3.jpg';   
import developer4 from '../Images/developer4.png';   

const About = () => {
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
          <button className="btn-aboutus current">About Us</button>
          <Link to="/ContactUs" className="btn-contactus">
            <button>Contact Us</button>
          </Link>
          <img src={LoginLogo} alt="Login Logo" className="button-link" />
          <img src={CartLogo} alt="Cart Logo" className="button-links" />
        </div>
      </nav>

      <hr />

      <div className="image-container">
        <img src={Background} alt="Background" className="background-image" />
        <div className="text-overlays">
          <p className="image-text-menu">About Us</p>
        </div>
      </div>

      <br />
      <br />
      <hr />
      <div className="aboutusbackground">
        <img src={whitebg} alt="aboutus" className="background-aboutus" />
        <img className="AboutUsLogo" alt='aboutus' src={AboutUsLogo} />
        <div className="text-about-head">
          <p className="text-about">
            ABOUT<br /><br />
            Golden Bakes N' Crafts is a dessert shop which provides affordable and excellent quality taste pastries that will surely satisfy the cravings of our customers.
          </p>
        </div>
      </div>

      <div className="aboutusbackground">
        <div className="background-aboutUs-content">
          <h1>Developer Profile</h1>
          <div className="developer-gallerys">
            <div className="developer-profile">
            <img src={developer1} alt="developer1" className="developer-photo" />
              <p className="developer-name">Meliza Bande</p>
              <p className="developer-names">Web Developer</p>
              <p className="developer-bio">
                Meliza Bande is the talented developer behind the Golden Bakes 'N Crafts website.
                With a passion for coding and a love for desserts, Meliza has crafted this website
                to showcase the delicious offerings of Golden Bakes 'N Crafts.
              </p>

              <img src={developer2} alt="developer2" className="developer-photo" />
              <p className="developer-name">Alexis Greko Agonoy</p>
              <p className="developer-names">Web Developer/Designer</p>
              <p className="developer-bio">
                Alexis Greko Agonoy is the talented developer behind the Golden Bakes 'N Crafts website. 
                With a passion for coding and a love for desserts, Alexis has crafted this website 
                to showcase the delicious offerings of Golden Bakes 'N Crafts.
              </p>

              <img src={developer3} alt="developer3" className="developer-photo" />
              <p className="developer-name">John Gabriel Rojas</p>
              <p className="developer-names">Web Designer</p>
              <p className="developer-bio">
                John Gabriel Rojas is the talented developer behind the Golden Bakes 'N Crafts website. 
                With a passion for coding and a love for desserts, John has crafted this website 
                to showcase the delicious offerings of Golden Bakes 'N Crafts.
              </p>

              <img src={developer4} alt="developer4" className="developer-photo" />
              <p className="developer-name">Terrence Jay Pajarillo</p>
              <p className="developer-names">Web Designer</p>
              <p className="developer-bio">
              Terrence Jay Pajarillo is the talented developer behind the Golden Bakes 'N Crafts website. 
                With a passion for coding and a love for desserts, Terrence has crafted this website 
                to showcase the delicious offerings of Golden Bakes 'N Crafts.
              </p>



            </div>
          </div>
        </div>
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


export default About;