import React from "react";
import logo from "./logo.svg";
import AccessoriesImage from "./images/AccessoriesImage.jpg";
import AccessoriesImageMobile from "./images/AccessoriesImageMobile.jpg";
import ArrowLeft from "./images/ArrowLeft.png";
import ArrowRight from "./images/ArrowRight.png";
import Cart from "./images/Cart.png";
import EmailIcon from "./images/EmailIcon.png";
import Group3 from "./images/Group3.png";
import Group8 from "./images/Group8.png";
import Group9 from "./images/Group9.png";
import Group15 from "./images/Group15.png";
import HeroImage1 from "./images/HeroImage1.jpg";
import HeroImage1Mobile from "./images/HeroImage1Mobile.jpg";
import HeroImage2 from "./images/HeroImage2.jpg";
import Logo from "./images/Logo.png";
import MensImage from "./images/MensImage.jpg";
import MobileDropDown from "./images/MobileDropDown.png";
import ProductImage1 from "./images/ProductImage1.jpg";
import Social1 from "./images/Social1.jpg";
import Social2 from "./images/Social2.jpg";
import Social3 from "./images/Social3.jpg";
import Social4 from "./images/Social4.jpg";
import Social5 from "./images/Social5.jpg";
import WomensImage from "./images/WomensImage.jpg";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <div id="announcement-bar" class="announcement-bar">
          <span> FREE SHIPPING ON ALL ORDERS OVER $75 </span>
        </div>
        <div class="nav-bar">
          <div class="mobile-dropdown">
            <img src={MobileDropDown}></img>
          </div>
          <div class="logo-container">
            <img src={Logo}></img>
          </div>
          <div class="cart">
            <img src={Cart}></img>
          </div>
        </div>
      </header>
      <div class="banner">
        <img src={HeroImage1Mobile} class="img-frame hide-on-desktop"></img>
        <img src={HeroImage1} class="img-frame hide-on-mobile"></img>
        <div class="banner-info">
          <h1 class="h1">Title Goes Here</h1>
          <h2 class="h2">Tagline wil go right here.</h2>
          <div class="button">Shop Now</div>
        </div>
      </div>

      <div class="collection-block">
        <div class="womens mobile-half desktop-third">
          <img src={WomensImage}></img>
          <span class="collection-title">Womens</span>
        </div>
        <div class="mens mobile-half desktop-third">
          <img src={MensImage}></img>
          <span class="collection-title">Mens</span>
        </div>
        <div class="accesories mobile-whole desktop-third">
          <img src={AccessoriesImageMobile}></img>
          <span class="collection-title">Accesories</span>
        </div>
      </div>
    </div>
  );
}

export default App;
