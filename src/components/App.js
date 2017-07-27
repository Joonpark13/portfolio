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
                I study physics, music composition, and computer science at Northwestern University.
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
              My name is Joon Park  and I'm a web developer raised in Ithaca NY.
              I'm currently living in the Chicagoland area finishing up my last year at Northwestern
              University, where I study physics, music composition, and computer science.
            </p>
            <p className="page-text">
              Physics research is actually how I learned to code - but I found
              out I enjoy the design and problem solving of full stack development even more.
              As a young developer I'm excited to continue feeding my insatiable appetite for learning.
              Check out some of my past projects below!
            </p>
          </div>
        </div>

        <ContentPage title="Projects">
          <ProjectDisplay
            title="Serif.nu"
            img={SerifScreenshot}
            large
            summary={
              <div>
                <p className="project-summary-text">
                  <a href="https://serif.nu">Serif.nu</a> is a course scheduling web app designed to
                  help Northwestern students plan their class registration more easily and quickly.
                  Motivated by frustrations in using Northwestern's own course registration system,
                  this project served as my introduction to JavaScript and web development in general.
                  The first version (created using <span className="bold">flask</span> and
                  <span className="bold"> PostgreSQL</span>) was released Fall 2015, and a new version
                  (rebuild from scratch using <span className="bold">React</span> and
                  <span className="bold"> Node.js</span>) was released Winter 2017.
                </p>
                <p className="project-summary-text">
                  Serif.nu served not only as my gateway into web development but also taught me about
                  what it takes to turn an idea into a product under tight schedules and even skills
                  such as how to market a product.
                </p>
                <p className="project-summary-text highlight">
                  Serif.nu was the first place winner of the Northwestern IEEE Project Showcase.
                </p>
                <div className="project-summary-icons">
                  <IconButton>
                    <span className="fa fa-github"></span>
                  </IconButton>
                </div>
              </div>
            }
          />
          <ProjectDisplay
            title="Census Reporter"
            img={CRScreenshot}
            large
            summary={
              <div>

              </div>
            }
          />
          <ProjectDisplay title="RightStudent & ASM" />
          <ProjectDisplay title="Superhero Fueling" />
          <ProjectDisplay title="JoonPark.me (v1)" />
          <ProjectDisplay title="Felx Fernandez-Penny PR" />
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
