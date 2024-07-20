import React from "react";
import { Link } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
import "./style.css";

const PujaList = () => {
  return (
    <div className="slideshow">
      <div className="puja-packages" id="package-details">
        <div className="package">
          <h1>
            <MdCurrencyRupee /> 850
          </h1>
          <h4>Individual puja</h4>
          <p>Package for 1 Person</p>

          <p>
            Pandit ji will call out your name and gotra during the puja sankalp.
            <br />
            Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva,
            or Deep Daan to be done in your name.
            <br />
            Upon completion, a videoof your puja and offering will be shared
            with you on your registered Email ID or can be found in your booking
            history within 3-4 days.
          </p>
          <Link to="/user-details">
            <button className="puja-package-button">Select puja package</button>
          </Link>
        </div>
        <div className="package">
          <h1>
            <MdCurrencyRupee /> 1250
          </h1>
          <h4>Partner Puja</h4>
          <p>Package for 2 Person</p>

          <p>
            Pandit ji will call out your name and gotra during the puja sankalp.
            <br />
            Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva,
            or Deep Daan to be done in your name.
            <br />
            Upon completion, a video of your puja and offering will be shared
            with you on your registered Email ID or can be found in your booking
            history within 3-4 days.
          </p>
          <Link to="/user-details">
            <button className="puja-package-button">Select puja package</button>
          </Link>
        </div>
        <div className="package">
          <h1>
            <MdCurrencyRupee /> 1590
          </h1>
          <h4>Family + Bhog</h4>
          <p>Package for 4 Person</p>
          <p>
            Pandit ji will call out your name and gotra during the puja sankalp.
            <br />
            Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva,
            or Deep Daan to be done in your name.
            <br />
            Upon completion, a video of your puja and offering will be shared
            with you on your registered Email ID or can be found in your booking
            history within 3-4 days.
          </p>
          <Link to="/user-details">
            <button className="puja-package-button">Select puja package</button>
          </Link>
        </div>
        <div className="package">
          <h1>
            <MdCurrencyRupee /> 2500
          </h1>
          <h4>Joint Family + Bhog + Flower Basket</h4>
          <p>Package for 6 Person</p>

          <p>
            Pandit ji will call out your name and gotra during the puja sankalp.
            <br />
            Opt for additional offerings like Vastra Daan, Anna Daan, Gau Seva,
            or Deep Daan to be done in your name.
            <br />
            Upon completion, a video of your puja and offering will be shared
            with you on your registered Email ID or can be found in your booking
            history within 3-4 days.
          </p>
          <Link to="/user-details">
            <button className="puja-package-button">Select puja package</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PujaList;
