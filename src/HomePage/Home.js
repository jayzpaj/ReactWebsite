import React from 'react';
import '../css/MainStyle.css'; 
import { Link } from 'react-router-dom';
import logoImage from '../Images/Logo.png';
import LoginLogo from '../Images/LoginLogo.png';
import CartLogo from '../Images/CartLogo.png';
import Footer from '../Images/Footer.JPG';
import Design from '../Images/Design.png';
import IceCupImage from '../Images/IceCup.png'; 
import FacebookImage from '../Images/facebook.png'; 
import CupcakeImage from '../Images/Cupcake.png'; 
import Background from '../Images/background.png';
import Picture1 from '../Images/Picture1.png' 
import Picture2 from '../Images/Picture2.png' 
import Picture3 from '../Images/Picture3.png' 


const GoldenBakesNCrafts = () => {
  return (
    <>
      <nav>
        <div className="Logo">
          <img src={logoImage} alt="Golden Bakes 'N Crafts Logo" className="Logo_img" />
        </div>
        <div className="button-container">
          <button className="btn-home current">Home</button>
          <Link to="/Menu" className="btn-menu">
            <button>Menu</button>
          </Link>
          <Link to="/AboutUs" className="btn-aboutus">
            <button>About Us</button>
          </Link>
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
        <Link to="/Menu">
          <button className="image-button">Order Now</button>
        </Link>
        <div className="text-overlay">
          <p className="image-text">Golden Bakes 'n Crafts</p>
          <p className="images-text">And All Things Nice!</p>
        </div>
      </div>

      <br />
              <div class="columns">
          <div class="content">
            <img src={Picture1} alt="Picture1" style={{ width: '100%' }} />
            <h3>Cookies & Macaroons</h3>
            <p>Our tasty and delicious Cookies and Macaroons are packaged in a cardboard box with a transparent plastic front and a handle for convenience. It also has a string that serves as a security feature to see if the box had already been opened or not. It also has a tag that includes our social media pages and a thank you card.</p>
          </div>
        </div>
        <div class="columns">
          <div class="content">
            <img src={Picture2} alt="Picture2" style={{ width: '100.5%' }} />
            <h3>Ensaymada</h3>
            <p>Our creamy and delicious ensaymada is packaged in a plastic container with a built-in clip lock mechanism to secure and protect the product inside. We also wrapped it with a string for added protection and to also serve as a handle for convenience. Outside of the packaging includes a sticker of our logo for branding and also a sticker that contains the expiration date of our ensaymada.</p>
          </div>
        </div>
        <div class="columns">
          <div class="content">
            <img src={Picture3} alt="Picture3" style={{ width: '101.5%' }} />
            <h3>Cake in a Cup</h3>
            <p>Our cake in a cup is packaged in a cup-shaped plastic tub with a plastic lid. It contains a sticker of our logo for branding and a sticker that contains our product's expiration date.</p>
          </div>
        </div>
  <br />

      <div className="background">
        <img src={Footer} alt="Background" />
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

export default GoldenBakesNCrafts;