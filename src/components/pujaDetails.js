import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";

import "./style.css";

const PackageSelection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className="full-section">
      <header className="header">
        <div style={{ display: "flex" }}>
          <img src="./logo.png" alt="Sri Mandir" className="logo" />
          <h2>Sri Mandhir</h2>
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/puja">Puja</a>
            </li>
            <li>
              <a href="/chadhava">Chadhava</a>
            </li>
          </ul>
        </nav>
        <div className="profile-container">
          <img
            src="./profile.png"
            alt="Profile"
            className="profile-icon"
            onClick={toggleProfileMenu}
          />
          {showProfileMenu && (
            <div className="profile-menu">
              <a href="/login">Login / Create an account</a>
              <div className="profile-details">
                <a href="/profile">My profile</a>
                <a href="/pujabookings">My Puja Bookings</a>
                <a href="/chadhava-bookings">My Chadhava Bookings</a>
                <a href="/book-puja">Book a Puja</a>
                <a href="/book-chadhava">Book a Chadhava</a>
              </div>
              <div className="explore-services">
                <a href="/">Home</a>
                <a href="/puja-seva">Puja Seva</a>
                <a href="/chadhava-seva">Chadhava Seva</a>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="puja-page">
        <div className="left-column">
          <Slider {...settings}>
            <div className="slide">
              <img
                src="./slide1.png"
                style={{ height: "500px" }}
                alt="Slide 1"
              />
            </div>
            <div className="slide">
              <img
                src="./slide2.png"
                style={{ height: "500px" }}
                alt="Slide 2"
              />
            </div>
            <div className="slide">
              <img
                src="./slide3.png"
                style={{ height: "500px" }}
                alt="Slide 3"
              />
            </div>
          </Slider>
        </div>
        <div className="right-column">
          <h2>Shani Saade Saati Peeda Shanti Mahapuja and Til Tel Abhishek</h2>
          <p>For Prevention of Misfortunes and Adversities</p>
          <p>
            <strong>Location:</strong> Shree Shanidev Temple, Shani Shingnapur,
            Maharashtra
          </p>
          <p>
            <strong>Date:</strong> 20 July IST, Saturday, Ashadha Shukla
            Chaturdashi
          </p>
          <div className="countdown">
            <span>0 Day 14 Hours 2 Mins 28 Secs</span>
          </div>
          <p>
            Till now <strong>2,00,000+ Devotees</strong> have participated in
            Pujas conducted by Sri Mandir Puja Seva.
          </p>
          <Link to="/package-selection" className="link-no-underline">
            <p className="puja-package-button">
              Select puja package <FaArrowRightLong />
            </p>
          </Link>
        </div>
      </div>
      <div className="second-section">
        <section className="puja-details">
          <h3>Puja Details</h3>
          <p>Description of the puja details...</p>
        </section>

        <section className="puja-benefits">
          <h3>Puja Benefits</h3>
          <ul>
            <li>Benefit 1</li>
            <li>Benefit 2</li>
            <li>Benefit 3</li>
          </ul>
        </section>

        <section className="puja-process">
          <h3>Puja Process</h3>
          <ul>
            <li>Step 1</li>
            <li>Step 2</li>
            <li>Step 3</li>
          </ul>
        </section>

        <section className="temple-details">
          <h3>Temple Details</h3>
          <img src={`${process.env.PUBLIC_URL}/temple.jpg`} alt="Temple" />
          <p>Description of the temple...</p>
        </section>
        <h3>Puja Packages</h3>

        <div className="puja-packages" id="package-details">
          <div className="package">
            <h1>
              <MdCurrencyRupee /> 850
            </h1>
            <h4>Individual puja</h4>
            <p>Package for 1 Person</p>

            <p>
              Pandit ji will call out your name and gotra during the puja
              sankalp.
              <br />
              Opt for additional offerings like Vastra Daan, Anna Daan, Gau
              Seva, or Deep Daan to be done in your name.
              <br />
              Upon completion, a videoof your puja and offering will be shared
              with you on your registered Email ID or can be found in your
              booking history within 3-4 days.
            </p>
            <Link to="/user-details">
              <button className="puja-package-button">
                Select puja package
              </button>
            </Link>
          </div>
          <div className="package">
            <h1>
              <MdCurrencyRupee /> 1250
            </h1>
            <h4>Partner Puja</h4>
            <p>Package for 2 Person</p>

            <p>
              Pandit ji will call out your name and gotra during the puja
              sankalp.
              <br />
              Opt for additional offerings like Vastra Daan, Anna Daan, Gau
              Seva, or Deep Daan to be done in your name.
              <br />
              Upon completion, a video of your puja and offering will be shared
              with you on your registered Email ID or can be found in your
              booking history within 3-4 days.
            </p>
            <Link to="/user-details">
              <button className="puja-package-button">
                Select puja package
              </button>
            </Link>
          </div>
          <div className="package">
            <h1>
              <MdCurrencyRupee /> 1590
            </h1>
            <h4>Family + Bhog</h4>
            <p>Package for 4 Person</p>
            <p>
              Pandit ji will call out your name and gotra during the puja
              sankalp.
              <br />
              Opt for additional offerings like Vastra Daan, Anna Daan, Gau
              Seva, or Deep Daan to be done in your name.
              <br />
              Upon completion, a video of your puja and offering will be shared
              with you on your registered Email ID or can be found in your
              booking history within 3-4 days.
            </p>
            <Link to="/user-details">
              <button className="puja-package-button">
                Select puja package
              </button>
            </Link>
          </div>
          <div className="package">
            <h1>
              <MdCurrencyRupee /> 2500
            </h1>
            <h4>Joint Family + Bhog + Flower Basket</h4>
            <p>Package for 6 Person</p>

            <p>
              Pandit ji will call out your name and gotra during the puja
              sankalp.
              <br />
              Opt for additional offerings like Vastra Daan, Anna Daan, Gau
              Seva, or Deep Daan to be done in your name.
              <br />
              Upon completion, a video of your puja and offering will be shared
              with you on your registered Email ID or can be found in your
              booking history within 3-4 days.
            </p>
            <Link to="/user-details">
              <button className="puja-package-button">
                Select puja package
              </button>
            </Link>
          </div>
        </div>

        <section className="testimonials">
          <h3>What Devotees Say</h3>
          <blockquote>"Testimonial 1"</blockquote>
          <blockquote>"Testimonial 2"</blockquote>
          <blockquote>"Testimonial 3"</blockquote>
        </section>

        <section className="faqs">
          <h3>Frequently Asked Questions</h3>
          <details>
            <summary>Question 1?</summary>
            <p>Answer to question 1...</p>
          </details>
          <details>
            <summary>Question 2?</summary>
            <p>Answer to question 2...</p>
          </details>
        </section>
      </div>
      <footer className="footer">
        <p>© 2024 Sri Mandir Puja Seva. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PackageSelection;
