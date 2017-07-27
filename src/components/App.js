import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';

import StripeCard from './StripeCard.js';
import ProjectDisplay from './ProjectDisplay';
import ContentPage from './ContentPage.js';

import '../css/App.css';

import SerifScreenshot from '../images/SerifNu.PNG';
import CRScreenshot from '../images/CensusReporter.PNG';
import SuperheroScreenshot from '../images/SuperheroFueling.PNG';

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
          <ProjectDisplay title="Serif.nu" img={SerifScreenshot} large>
            <p className="project-summary-text highlight">
              Simple. Fast. Visual. Course scheduling for Northwestern Unviersity.
            </p>
            <p className="project-summary-text">
              <a href="https://serif.nu">Serif.nu</a> is a course scheduling web app designed to
              help Northwestern students plan their class registration more easily and quickly.
              Motivated by frustrations in using Northwestern's own course registration system,
              this project served as my introduction to JavaScript and web development in general.
              The first version (created using <span className="bold">Flask</span> and
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
          </ProjectDisplay>
          <ProjectDisplay title="Census Reporter" img={CRScreenshot} large>
            <p className="project-summary-text">
              <a href="https://censusreporter.com">Census Reporter</a> aims to make the access of
              U.S. census data easier and simpler. This was my first experience diving into an
              established code base. Since joining the team, I've covered the full stack while
              implementing full-text search in the Census Reporter API, designing a search results
              page, generating sitemaps, and making data download files more human readable.
            </p>
            <p className="project-summary-text">
              Census Reporter is built using <span className="bold">Django</span>,
              <span className="bold"> Flask</span>, and <span className="bold">PostgreSQL</span>.
            </p>
            <p className="project-summary-text">
              Through the Census Reporter project, I'm also affiliated with the Northwestern
              University <a href="https://knightlab.northwestern.edu/">Knight Lab</a>.
            </p>
            <div className="project-summary-icons">
              <IconButton>
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>
          <ProjectDisplay title="RightStudent & ASM">
            <p className="project-summary-text">Coming Soon</p>
          </ProjectDisplay>
          <ProjectDisplay title="Superhero Fueling" img={SuperheroScreenshot}>
            <p className="project-summary-text highlight">
              A way to encourage children to eat better.
            </p>
            <p className="project-summary-text">
              Superhero Fueling is an app for children that gameifies their eating habits and
              encourages them to eat more healthily. As they or their parents enter the foods
              they eat into the app, the superhero will fly and save the day or fall from
              the sky depending on how healthy their choice of foods were.
            </p>
            <p className="project-summary-text">
              This app was built in the second five weeks of the Northwestern University
              <a href="https://www.cs.northwestern.edu/academics/courses/394/"> EECS 394 </a>
              course as part of a four-person student developer team. Through working with
              real client managers, we practiced <span className="bold">agile</span> methodologies
              and learned about the product launch cycle.
            </p>
            <p className="project-summary-text">
              Superhero Fueling was built using <span className="bold">Appgyver Supersonic </span>
              and <span className="bold">Angular</span>.
            </p>
            <div className="project-summary-icons">
              <IconButton>
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>
          <ProjectDisplay title="JoonPark.me (v1)">
            <p className="project-summary-text">
              <a href="http://joonpark.me-old.s3-website-us-east-1.amazonaws.com">The previous version of this website </a>
              was designed to showcase the various
              aspects of my life. The challenge was twofold: I needed a site design that would
              showcase my skills and reflect my personality, and I wanted to fully utilize the power
              of HTML and CSS3. I was able to use minimal JavaScript to build this site, allowing me to
              focus on improving my HTML/CSS skills.
            </p>
            <p className="project-summary-text">
              I quickly realized that I needed a more developer-centric portfolio website, and redesigned the site
              incorporating elements from <a href="https://material.io/">Material Design</a>.
            </p>
            <div className="project-summary-icons">
              <IconButton>
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>
          <ProjectDisplay title="Felx Fernandez-Penny PR">
            <p className="project-summary-text">Coming Soon</p>
          </ProjectDisplay>
        </ContentPage>

        <ContentPage title="Contact">
          <div id="contact-content">
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
          </div>
        </ContentPage>
      </div>
    );
  }
}

export default App;
