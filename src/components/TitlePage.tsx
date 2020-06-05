import React from 'react';
import { ExpandMore } from '@material-ui/icons';
import StripeCard from './StripeCard';
import './TitlePage.css';

export default function TitlePage() {
  return (
    <div id="title-page" className="page">
      <div id="title-content">
        <StripeCard>
          <h2 id="name-line">Hi. I&apos;m Joon.</h2>
        </StripeCard>

        <div className="content-width-wrapper">
          <p className="intro-text">
            <span className="bold">I&apos;m a web developer </span>
            focused on beautiful design and great user experiences.
          </p>
        </div>
      </div>

      <ExpandMore id="scroll-prompt" />
    </div>
  );
}