import React from 'react';
import StripeCard from './StripeCard';
import AboutImg from '../images/falling.jpg';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div id="falling" className="page content-page">
      {/* For smaller screen sizes */}
      <StripeCard id="about-stripecard-white" stripeColor="white">
        <h2>About</h2>
      </StripeCard>

      {/* For larger screen sizes */}
      <StripeCard id="about-stripecard-primary">
        <h2>About</h2>
      </StripeCard>

      <div id="about-content" className="content-width-wrapper">
        <div id="falling-placeholder">
          <img
            src={AboutImg}
            alt="Me falling off a cliff"
            id="about-img-large-screen"
          />
        </div>

        <div id="about-text-wrapper">
          <p className="page-text">
            Welcome! I&apos;m Joon and I&apos;m a web developer based in
            Chicago. I&apos;m finishing up my last year at Northwestern
            University, where I study physics, music composition, and computer
            science.
          </p>
          <p className="page-text">
            I'm a huge fan of both hard-core data crunching (probably has
            something to do with my physics background) and the creative design
            aspects of UI. As a young developer I&apos;m excited to continue
            feeding my insatiable appetite for learning. Check out some of my
            past projects below!
          </p>
        </div>
      </div>
    </div>
  );
}
