import React from 'react';
import styled from 'styled-components';
import ContentPage from '../components/ContentPage';
import IconButton from '../components/OverrideIconButton';
import Text from '../components/Text';
import './ContactPage.css';

const ContactParagraph = styled.div`
  margin-bottom: 20px;
`;

export default function ContactPage() {
  return (
    <ContentPage title="Contact">
      <div id="contact-content">
        <ContactParagraph>
          If you'd like to learn more about one of my projects, inquire about
          one of my talks, or reach out for any other reason, please don't
          hesitate to contact me!
        </ContactParagraph>

        <div id="sm" className="icons">
          <IconButton navigateTo="mailto:contact@joonpark.me">
            <span className="fa fa-envelope"></span>
          </IconButton>
          <IconButton navigateTo="https://www.linkedin.com/in/joonpark13/">
            <span className="fa fa-linkedin"></span>
          </IconButton>
          <IconButton navigateTo="https://github.com/Joonpark13/">
            <span className="fa fa-github"></span>
          </IconButton>
          <IconButton navigateTo="https://twitter.com/JoonParkMusic">
            <span className="fa fa-twitter"></span>
          </IconButton>
          <IconButton navigateTo="https://medium.com/@joon.park13">
            <span className="fa fa-medium"></span>
          </IconButton>
          <IconButton navigateTo="http://joonparkmusic.com/">
            <span className="fa fa-music"></span>
          </IconButton>
        </div>

        <div id="lg" className="icons">
          <IconButton
            className="contact-btn"
            navigateTo="mailto:contact@joonpark.me"
          >
            <span className="fa fa-envelope fa-lg"></span>
          </IconButton>
          <IconButton
            className="contact-btn"
            navigateTo="https://www.linkedin.com/in/joonpark13/"
          >
            <span className="fa fa-linkedin fa-lg"></span>
          </IconButton>
          <IconButton
            className="contact-btn"
            navigateTo="https://github.com/Joonpark13/"
          >
            <span className="fa fa-github fa-lg"></span>
          </IconButton>
          <IconButton
            className="contact-btn"
            navigateTo="https://twitter.com/JoonParkMusic"
          >
            <span className="fa fa-twitter fa-lg"></span>
          </IconButton>
          <IconButton
            className="contact-btn"
            navigateTo="https://joonpark13.medium.com/"
          >
            <span className="fa fa-medium fa-lg"></span>
          </IconButton>
          <IconButton
            className="contact-btn"
            navigateTo="http://joonparkmusic.com/"
          >
            <span className="fa fa-music fa-lg"></span>
          </IconButton>
        </div>
      </div>
    </ContentPage>
  );
}
