import React, { Component } from 'react';

import StripeCard from './StripeCard';

import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div id="title-page">
          <div id="title-content">
            <StripeCard>
              <h2 id="name-line">Hi. I'm Joon.</h2>
            </StripeCard>

            <div className="content-width-wrapper">
              <p className="intro-text">I'm a web developer focused on beautiful design and fine-tuned user experiences.</p>
              <p className="intro-text">I currently study physics, music composition, and computer science at Northwestern University.</p>
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>
    );
  }
}

export default App;
