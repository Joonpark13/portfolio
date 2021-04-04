import React from 'react';
import StripeCard from '../components/StripeCard';
import ChicagoImg from '../images/ChicagoSkylineHorizontal.jpg';
import Link from '../components/Link';
import './AboutPage.css';

const aboutPageLinkColor = 'var(--cerulean-20)';

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
            src={ChicagoImg}
            alt="Chicago skyline at night"
            id="about-img-large-screen"
          />
        </div>

        <div id="about-text-wrapper">
          <p className="page-text">
            Welcome! I&apos;m a Software Engineer at Google, based in Chicago.
            I'm primarily focused on web frontend development: I'm passionate
            about building clean frontend architectures that enable delightful
            user AND developer experiences.
          </p>
          <p className="page-text">
            I was previously a Frontend Software Engineer at Grubhub, and before
            that I was a student at Northwestern University where I graduated with
            a BA in Physics and a BM in Music Composition. While I was a student,
            I was a fellow at{' '}
            <Link
              color={aboutPageLinkColor}
              href="https://knightlab.northwestern.edu/"
            >
              Knight Lab
            </Link>{' '}
            and a researcher at{' '}
            <Link color={aboutPageLinkColor} href="https://www.fnal.gov/">
              Fermilab
            </Link>
            . I've also taught Python to a classroom of high school students at
            the{' '}
            <Link
              color={aboutPageLinkColor}
              href="https://www.adlerplanetarium.org/"
            >
              Adler Planetarium
            </Link>{' '}
            and worked part time on{' '}
            <Link color={aboutPageLinkColor} href="https://censusreporter.org/">
              Census Reporter
            </Link>
            . As a young developer I&apos;m excited to continue feeding my
            insatiable appetite for learning. Check out some of my past projects
            below!
          </p>
        </div>
      </div>
    </div>
  );
}
