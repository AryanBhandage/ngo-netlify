import React from 'react';
import { Helmet } from 'react-helmet';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import educationImg from '../assets/impact/education.jpg';
import clothingImg from '../assets/impact/clothes.jpg';
import foodImg from '../assets/impact/food.jpg';
import '../about.css';

const About = () => {
  const slideImages = [
    { url: educationImg, caption: 'Nurturing Our Elders with Care' },
    { url: clothingImg, caption: 'Meeting Essential Daily Needs' },
    { url: foodImg, caption: 'Promoting Health and Nutrition' },
  ];

  return (
    <main className="ngo-about">
      <Helmet>
        <title>Suryodaya Old Age Home - About Us</title>
        <meta
          name="description"
          content="Discover Suryodaya Old Age Home, a mission of Tejaswi Foundation, dedicated to providing shelter, care, and dignity to homeless and needy elderly in Pune since 2013."
        />
        <meta
          name="keywords"
          content="Suryodaya Old Age Home, Tejaswi Foundation, elderly care, Pune NGO, senior citizen support, women’s development, Chhayatai Bhagat"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <h2>About Suryodaya Old Age Home</h2>
        <p>
          Since 2013, Suryodaya Old Age Home, a mission of Tejaswi Foundation,
          has been a sanctuary for homeless, helpless, and disabled elderly in Dhayari, Pune.
          Founded by Chhayatai Bhagat, inspired by Dr. Sindhutai Sapkal,
          we provide love, shelter, and care to over 25 grandparents.
          Our Women’s Development and Counseling Center also empowers women and seniors
          through vocational training and support.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission-vision text-center">
        <div>
          <h3>Our Mission</h3>
          <p>
            We are committed to offering a safe, nurturing home for over 25 elderly,
            providing free care for the destitute with nutritious meals, timely medical support,
            exercise, and emotional well-being. Operating in a rented space,
            we urgently seek a permanent shelter to continue our mission,
            supported by the dedication of Chhayatai Bhagat and generous community contributions.
          </p>
        </div>
      </section>

      {/* Impact Slideshow */}
      <section className="impact-slideshow slideshow-container">
        <h3>Our Work in Action</h3>
        <Slide>
          {slideImages.map((slide, index) => (
            <div key={index} className="each-slide">
              <img src={slide.url} alt={slide.caption} />
              <p>{slide.caption}</p>
            </div>
          ))}
        </Slide>
      </section>

      {/* Impact Metrics */}
      <section className="impact">
        <h3>Our Impact</h3>
        <div className="stats">
          <div>
            <p>25+</p>
            <p>Grandparents Supported</p>
          </div>
          <div>
            <p>13+</p>
            <p>Years of Service</p>
          </div>
          <div>
            <p>100+</p>
            <p>Women Empowered</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta text-center">
        <h3>Get Involved</h3>
        <p>
          Join us in uplifting the lives of our elderly at <strong>Suryodaya Old Age Home</strong>.
        </p>
        <p>
          You can contribute in the following ways:
        </p>
        <ul className="get-involved-list">
          <li><strong>Your Time:</strong> Volunteer with us and spend meaningful moments with our elders.</li>
          <li><strong>Financial Support:</strong> Help us provide consistent care, food, shelter, and medical aid.</li>
          <li><strong>Daily Essentials:</strong> Donate meals, clothes, medicines, milk, vegetables, or other necessities.</li>
          <li><strong>Celebrate & Honor:</strong> Celebrate birthdays or remember loved ones through a donation in their name.</li>
        </ul>
        <p>
          ✅ All donations are eligible for <strong>80G tax exemption</strong>.
        </p>
        <p>
          ✅ We are a <strong>CSR-certified organization</strong> and welcome all contributions to help us build a permanent shelter.
        </p>
        <div className="buttons flex justify-center">
          <a href="/donate-success" className="donate-btn">
            Support Our Elders
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
