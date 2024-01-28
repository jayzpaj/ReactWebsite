import React from 'react';
import '../css/MainStyle.css'; 
import '../css/Menus.css'; 
import { Link } from 'react-router-dom';
import logoImage from '../Images/Logo.png';
import LoginLogo from '../Images/LoginLogo.png';
import CartLogo from '../Images/CartLogo.png';
import IceCupImage from '../Images/IceCup.png'; 
import FacebookImage from '../Images/facebook.png'; 
import CupcakeImage from '../Images/Cupcake.png'; 
import Design from '../Images/Design.png';
import Background from '../Images/background.png';
import CCE from '../Images/CCEMenu.JPG';
import CUE from '../Images/CUEMenu.JPG';
import CCC from '../Images/CCCMenu.JPG';
import BKM from '../Images/BKMMenu.JPG';
import CIC from '../Images/CICMenu.JPG';
import SINC from '../Images/SINCMenu.JPG';
import MIC from '../Images/MICMenu.JPG';
import UIC from '../Images/UICMenu.JPG';

  
function App() {
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
          <button class="btn-menu current">Menu</button>
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
        <div className="text-overlay-menu">
          <p className="image-text-menu">Bakes</p>
        </div>
      </div>
      <br />
      <hr />


        <div className="Menus" id="allGalleries">

             {/* Creamy Cheese Ensaymada */}
        <div className="bakesGallery gallery">
            <img src={CCE} alt="Creamy Cheese" />
            <div className="desc">Creamy Cheese Ensaymada<br /><hr className="color1" />P85</div>
        </div>

            {/* Cheesy Ube Ensaymada */}
        <div className="bakesGallery gallery">
            <img src={CUE} alt="Cheesy Ube" />
            <div className="desc">Cheesy Ube Ensaymada<br /><hr className="color1" />P85</div>
        </div>

        {/* Choco Chip Cookies */}
        <div className="cookiesGallery gallery">
            <img src={CCC} alt="Choco Chips" />
            <div className="desc">Choco Chip Cookies<br /><hr className="color1" />P50</div>
        </div>

        {/* Butter Kissed Macaroons */}
        <div className="cookiesGallery gallery">
            <img src={BKM} alt="Butter Kissed" />
            <div className="desc">Butter Kissed Macaroons<br /><hr className="color1" />P80</div>
        </div>

            {/* Cake in a Cup (Chocolate) */}
            <div className="cakesGallery gallery">
            <img src={CIC} alt="Chocolate Cup" />
            <div className="desc">Cake in a Cup (Chocolate)<br /><hr className="color1" />P55</div>
        </div>

            {/* Cake in a Cup (Strawberry) */}
            <div className="cakesGallery gallery">
                <img src={SINC} alt="Strawberry Cup" />
                <div className="desc">Cake in a Cup (Strawberry)<br /><hr className="color1" />P55</div>
            </div>

            {/* Cake in a Cup (Mango) */}
            <div className="Twos">
                <div className="cakesGallery gallery">
                <img src={MIC} alt="Mango Cup" />
                <div className="desc">Cake in a Cup (Mango)<br /><hr className="color1" />P55</div>
                </div>
            </div>

            {/* Cake in a Cup (Ube) */}
            <div className="Twos">
              <div className="cakesGallery gallery">
              <img src={UIC} alt="Ube Cake" />
              <div className="desc">Cake in a Cup (Ube)<br /><hr className="color1" />P55</div>
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
  
  export default App;