import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';

import StripeCard from './StripeCard.js';
import ProjectDisplay from './ProjectDisplay';
import ContentPage from './ContentPage.js';

import '../css/App.css';

import SerifScreenshot from '../images/SerifNu.PNG';
import CRScreenshot from '../images/CensusReporter.PNG';

class App extends Component {
  render() {
    return (
      <div id="app">
        <div id="title-page" className="page">
          <div id="title-content">
            <StripeCard>
              <h2 id="name-line">Hi. I'm Joon.</h2>
            </StripeCard>

            <div className="content-width-wrapper">
              <p className="intro-text">
                <span className="bold">I'm a web developer </span>
                focused on beautiful design and fine-tuned user experiences.
              </p>
              <p className="intro-text">
                I currently study physics, music composition, and computer science at Northwestern University.
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder  */}
        <div id="placeholder-page" className="page"></div>

        <div id="falling" className="page content-page">
          <StripeCard stripeColor="white">
            <h2>About</h2>
          </StripeCard>

          <div className="content-width-wrapper">
            <div id="falling-placeholder"></div>

            <p className="page-text">
              My name's Joon Park, and I'm a web developer raised in Ithaca NY, 
              currently living in the Chicagoland area. I'm finishing up my last year at Northwestern
              University, where I study physics, music composition, and physics.
            </p>
            <p className="page-text">
              Physics research is actually how I learned to code - but turns
              out I enjoy the design and problem solving of full stack development even more.
              As a young developer I'm excited to continue feeding my insatiable appetite for learning.
              Check out some of my past projects below!
            </p>
          </div>
        </div>

        <ContentPage title="Projects">
          <ProjectDisplay title="Serif.nu" img={SerifScreenshot} />
          <ProjectDisplay title="Census Reporter" img={CRScreenshot} />
          <ProjectDisplay title="RightStudent & ASM" />
          <ProjectDisplay title="Superhero Fueling" />
          <ProjectDisplay title="JoonPark.me (v1)" />
          <ProjectDisplay title="Felx Fernandez-Penny PR" />
        </ContentPage>

        <ContentPage title="To-Do">
          <p className="page-text">
            I think a person's to-do list speaks volumes. In that spirit, here's mine!
          </p>
        </ContentPage>

        <ContentPage title="Contact">
          <p className="page-text">
            Whether it's a job opportunity or a sci-fi book recommendation (I love those),
            I'm down to chat about anything!
          </p>

          <div id="icons">
            <IconButton>
              <span className="fa fa-envelope"></span>
            </IconButton>
            <IconButton>
              <span className="fa fa-linkedin"></span>
            </IconButton>
            <IconButton>
              <span className="fa fa-github"></span>
            </IconButton>
            <IconButton>
              <span className="fa fa-twitter"></span>
            </IconButton>
            <IconButton>
              <span className="fa fa-medium"></span>
            </IconButton>
          </div>
        </ContentPage>
      </div>
    );
  }
}

export default App;
