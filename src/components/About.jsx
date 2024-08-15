import React from 'react';
import './About.css';
import Footer from './Footer';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Your Well-Being, Our Priority</h1>
      </div>

      <div className="about-video">
        <video controls>
          <source src="/assets/TangelloConceptFinal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section className="how-it-works">
        <h2>How Tangello Works</h2>
        <div className="feature">
          <h3>Digital Space</h3>
          <p>
            Access a range of digital resources and a chatbot for instant
            assistance, available anytime and anywhere.
          </p>
        </div>
        <div className="feature">
          <h3>Physical Space</h3>
          <p>
            Engage in activities that promote well-being in our thoughtfully
            designed physical spaces, featuring comfortable seating and regular
            workshops.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
