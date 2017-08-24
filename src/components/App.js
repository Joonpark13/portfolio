import React from 'react';
import ExpandButton from 'material-ui-icons/ExpandMore';

import StripeCard from './StripeCard';
import ProjectDisplay from './ProjectDisplay';
import ContentPage from './ContentPage';
import IconButton from './OverrideIconButton';

import '../css/App.css';

import SerifScreenshot from '../images/SerifNu.PNG';
import CRScreenshot from '../images/CensusReporter.PNG';
import SuperheroScreenshot from '../images/SuperheroFueling.PNG';
import AboutImg from '../images/falling.jpg';

const App = () => (
  <div id="app">
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
          <p className="intro-text">
            I currently study physics, music composition, and computer science at Northwestern
            University.
          </p>
        </div>
      </div>

      <ExpandButton id="scroll-prompt" />
    </div>

    {/* Placeholder  */}
    <div id="placeholder-page" className="page"></div>

    <div id="falling" className="page content-page">
      <StripeCard id="about-stripecard-white" stripeColor="white">
        <h2>About</h2>
      </StripeCard>

      <StripeCard id="about-stripecard-primary">
        <h2>About</h2>
      </StripeCard>

      <div id="about-content" className="content-width-wrapper">
        <div id="falling-placeholder">
          <img src={AboutImg} alt="Me falling off a cliff" id="about-img-large-screen" />
        </div>

        <div id="about-text-wrapper">
          <p className="page-text">
            Welcome! I&apos;m Joon and I&apos;m a web developer based in the Chicagoland area.
            I&apos;m currently finishing up my last year at Northwestern University, where I study
            physics, music composition, and computer science.
          </p>
          <p className="page-text">
            Physics research is actually how I started coding, but I soon found that
            I enjoy the design and problem solving of web development even more.
            As a young developer I&apos;m excited to continue feeding my insatiable appetite for
            learning. Check out some of my past projects below!
          </p>
        </div>
      </div>
    </div>

    <ContentPage title="Projects">
      <div className="large-project-display">
        <ProjectDisplay title="Serif.nu" img={SerifScreenshot} large>
          <p className="project-summary-text highlight">
            Simple. Fast. Visual. Course scheduling for Northwestern Unviersity.
          </p>
          <p className="project-summary-text">
            <a href="https://serif.nu">Serif.nu</a> is a course scheduling web app designed to
            help Northwestern students plan their course schedules more easily and quickly.
            Motivated by frustrations in using Northwestern&apos;s own course registration system,
            this project served as my introduction to JavaScript and web development in general.
            The first version (created using <span className="bold">Flask</span> and
            <span className="bold"> PostgreSQL</span>) was released Fall 2015, and a new version
            (rebuild from scratch using <span className="bold">React</span> and
            <span className="bold"> Node.js</span>) was released Winter 2017.
          </p>
          <p className="project-summary-text">
            Serif.nu served not only as my gateway into web development but also taught me about
            what it takes to turn an idea into a product under tight schedules. It even gave me
            opportunities to learn skills I never thought I would, such as how to market a product.
          </p>
          <p className="project-summary-text highlight">
            Serif.nu was the first place winner of the Northwestern IEEE Project Showcase.
          </p>
          <div className="project-summary-icons">
            <IconButton href="https://github.com/Joonpark13/serif.nu">
              <span className="fa fa-github"></span>
            </IconButton>
          </div>
        </ProjectDisplay>
          
        <ProjectDisplay title="Census Reporter" img={CRScreenshot} large>
          <p className="project-summary-text">
            <a href="https://censusreporter.com">Census Reporter</a> aims to make the access of
            U.S. census data easier and simpler. This was my first experience diving into an
            established code base. Since joining the team, I&apos;ve covered the full stack while
            implementing full-text search in the Census Reporter API, designing a search results
            page, generating sitemaps, and making data download files more human readable.
          </p>
          <p className="project-summary-text">
            Census Reporter is built using <span className="bold">Django</span>,
            <span className="bold"> Flask</span>, and <span className="bold">PostgreSQL</span>.
          </p>
          <p className="project-summary-text">
            Through the Census Reporter project, I&apos;m also affiliated with the Northwestern
            University <a href="https://knightlab.northwestern.edu/">Knight Lab</a>.
          </p>
          <div className="project-summary-icons">
            <IconButton href="https://github.com/censusreporter/censusreporter">
              <span className="fa fa-github"></span>
            </IconButton>
            <IconButton href="https://github.com/censusreporter/census-api">
              <span className="fa fa-github"></span>
            </IconButton>
          </div>
        </ProjectDisplay>
      </div>

      <div className="small-project-display">
        <ProjectDisplay title="RightStudent & ASM">
          <p className="project-summary-text">
            While interning for Scholarships.com, I redesigned their two affiliate sites: RightStudent
            and ASM Omnichannel, as well as a few pages on Scholarships.com. Many of the pages I worked
            on was in need of a fresh, modern redesign. Focus was placed on the pages being seamlessly
            responsive and extremely intuitive. Contact me for more details.
          </p>
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
            <IconButton href="https://github.com/eecs394-f16/Superhero-Fueling">
              <span className="fa fa-github"></span>
            </IconButton>
          </div>
        </ProjectDisplay>

        <ProjectDisplay title="JoonPark.me (v1)">
          <p className="project-summary-text">
            The previous version of this website was designed to showcase the various
            aspects of my life. The challenge was twofold: I needed a site design that would
            showcase my skills and reflect my personality, and I wanted to fully utilize the power
            of HTML and CSS3. I forced myself to use minimal JavaScript to build the site, allowing me
            to focus on improving my HTML/CSS skills.
          </p>
          <p className="project-summary-text">
            I quickly realized that I needed a more developer-centric portfolio website, and
            redesigned the site as you see here incorporating elements from <a href="https://material.io/">Material Design</a>.
          </p>
          <div className="project-summary-icons">
            <IconButton href="https://github.com/Joonpark13/joonpark.me-OLD">
              <span className="fa fa-github"></span>
            </IconButton>
          </div>
        </ProjectDisplay>

        <ProjectDisplay title="Felix Fernandez-Penny PR">
          <p className="project-summary-text">Coming Soon</p>
        </ProjectDisplay>
      </div>
    </ContentPage>

    <ContentPage title="Contact">
      <div id="contact-content">
        <p className="page-text">
          Whether it&apos;s a job opportunity or a sci-fi book recommendation (I love those),
          I&apos;m down to chat about anything!
        </p>

        <div id="sm" className="icons">
          <IconButton href="mailto:joon@joonpark.me">
            <span className="fa fa-envelope"></span>
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/joonpark13/">
            <span className="fa fa-linkedin"></span>
          </IconButton>
          <IconButton href="https://github.com/Joonpark13/">
            <span className="fa fa-github"></span>
          </IconButton>
          <IconButton href="https://twitter.com/JoonParkMusic">
            <span className="fa fa-twitter"></span>
          </IconButton>
          <IconButton href="https://medium.com/@joon.park13">
            <span className="fa fa-medium"></span>
          </IconButton>
          <IconButton href="http://joonparkmusic.com/">
            <span className="fa fa-music"></span>
          </IconButton>
        </div>

        <div id="lg" className="icons">
          <IconButton className="contact-btn" href="mailto:joon@joonpark.me">
            <span className="fa fa-envelope fa-lg"></span>
          </IconButton>
          <IconButton className="contact-btn" href="https://www.linkedin.com/in/joonpark13/">
            <span className="fa fa-linkedin fa-lg"></span>
          </IconButton>
          <IconButton className="contact-btn" href="https://github.com/Joonpark13/">
            <span className="fa fa-github fa-lg"></span>
          </IconButton>
          <IconButton className="contact-btn" href="https://twitter.com/JoonParkMusic">
            <span className="fa fa-twitter fa-lg"></span>
          </IconButton>
          <IconButton className="contact-btn" href="https://medium.com/@joon.park13">
            <span className="fa fa-medium fa-lg"></span>
          </IconButton>
          <IconButton className="contact-btn" href="http://joonparkmusic.com/">
            <span className="fa fa-music fa-lg"></span>
          </IconButton>
        </div>
      </div>
    </ContentPage>
  </div>
);

export default App;
