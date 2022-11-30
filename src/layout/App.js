import React from "react";
import Header from "../component/header/Header";
import "./app.css";
import HeaderImg from "../image/header-img.png";
import Footer from "../component/Footer/footer";
import Infocards from "../component/InfoCards/infocards";
import Contact from "../component/Contact/contact";
import Experince from "../component/experince/experince";
import Portfolio from "../component/portfolio/portfolio";

const App = () => {
  return (
    <>
      <Header />
      <div className="header-section">
        <div className="contact">
          <span>I am</span>
          <h3>Samina Khan</h3>
          <span>Professor at KIU</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Suspendisse varius enim in eros elementum
            tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse varius enim in eros elementum tristique.
          </p>
          <button>Download CV</button>
        </div>
        <div className="image">
          <img src={HeaderImg} alt="logo" />
        </div>
      </div>
      <Infocards/>
      <Portfolio/>
      <Experince />
      <Contact/>
      <Footer />
    </>
  );
};

export default App;
