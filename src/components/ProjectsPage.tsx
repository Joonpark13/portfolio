import React from 'react';
import SerifScreenshot from '../images/SerifNu.PNG';
import CRScreenshot from '../images/CensusReporter.PNG';
import SuperheroScreenshot from '../images/SuperheroFueling.PNG';
import TeslaLogo from '../images/transparentTeslaLogo.png';
import ProjectDisplay from './ProjectDisplay';
import ContentPage from './ContentPage';
import IconButton from './OverrideIconButton';
import './ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <ContentPage title="Projects">
      <div id="projects-content">
        <div className="large-project-display">
          <ProjectDisplay title="Serif.nu" img={SerifScreenshot} large>
            <p className="project-summary-text highlight">
              Simple. Fast. Visual. Course scheduling for Northwestern Unviersity.
            </p>
            <p className="project-summary-text">
              <a href="https://serif.nu">Serif.nu</a> is a course scheduling web app designed to
              help Northwestern students plan their course schedules more easily and quickly.
              The project aimed to address frustrations in using Northwestern&apos;s own
              course registration system, but it became my introduction to JavaScript and
              web development in general.  The first version
              (created using <span className="bold">Flask</span> and
              <span className="bold"> PostgreSQL</span>) was released Fall 2015, and a new version
              (rebuilt from scratch using <span className="bold">React</span> and
              <span className="bold"> Node.js</span>) was released Winter 2017.
            </p>
            <p className="project-summary-text">
              Serif.nu served not only as my gateway into web development, but also taught me about
              what it takes to turn an idea into a product under tight schedules. I even learned a few
              non-technical skills along the way, like how to market a product and how to pitch an
              idea to potential partners.
            </p>
            <p className="project-summary-text highlight">
              Serif.nu was the first place winner of the Northwestern IEEE Project Showcase.
            </p>
            <div className="project-summary-icons">
              <IconButton navigateTo="https://github.com/Joonpark13/serif.nu">
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>

          <ProjectDisplay title="Census Reporter" img={CRScreenshot} large>
            <p className="project-summary-text">
              <a href="https://censusreporter.org">Census Reporter</a> aims to simplify access to
              U.S. census data. Since joining the team, I&apos;ve covered the full stack by
              implementing full-text search in the Census Reporter API, designing a search results
              page, generating sitemaps, and making data download files more human-friendly.
            </p>
            <p className="project-summary-text">
              Census Reporter was built using <span className="bold">Django</span>,
              <span className="bold"> Flask</span>, and <span className="bold">PostgreSQL</span>.
            </p>
            <div className="project-summary-icons">
              <IconButton navigateTo="https://github.com/censusreporter/censusreporter">
                <span className="fa fa-github"></span>
              </IconButton>
              <IconButton navigateTo="https://github.com/censusreporter/census-api">
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>
        </div>

        <div className="small-project-display">
          <ProjectDisplay title="SQL Murder Mystery">
            <p className="project-summary-text highlight">
              Use SQL to research clues and find out whodunit!
            </p>

            <p className="project-summary-text">
              Inspired by the <a href="https://github.com/veltman/clmystery">command line mystery</a>,
              I created this <a href="https://github.com/NUKnightLab/sql-mysteries">SQL murder mystery</a> with
              the help of Cathy He and Joe Germuska as part of my work as a fellow
              at the Northwestern University <a href="https://knightlab.northwestern.edu/">Knight Lab</a>.
              We think it's a great way to learn or practice your SQL skills - hope you have fun
              solving the mystery!
            </p>
            <div className="project-summary-icons">
              <IconButton navigateTo="https://github.com/NUKnightLab/sql-mysteries">
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>

          <ProjectDisplay title="TeslaSpotting" img={TeslaLogo}>
            <p className="project-summary-text highlight">
              Capture the Teslas you see on the streets!
            </p>

            <p className="project-summary-text">
              The inception of TeslaSpotting went as follows:
            </p>
            <ul className="project-summary-text">
              <li>Oh, hey, look, it&apos;s a Tesla!</li>
              <li>Oh hey, look, it&apos;s another Tesla!</li>
              <li>
                Gee, I&apos;ve seen a lot of Teslas this week... I wish I could easily keep track of
                when and where I&apos;ve seen them.
              </li>
              <li>
                Wait, I could make an app for that!
              </li>
              <li>
                Since I&apos;ve always wanted to try out <span className="bold">React Native</span>,
                this would be a great way to learn it!
              </li>
            </ul>
            <p className="project-summary-text">
              And thus, TeslaSpotting was born. I&apos;ve found that React Native does indeed bring
              the joy of component architecture to mobile app development while still allowing
              developers to end up with a native product for both platforms. As a huge fan of
              React, this was a no-brainer framework to try out.
            </p>
            <p className="project-summary-text">
              However, React Native is still
              young and has a lot of room for growth. Many functionalities are still split between
              iOS and Android, so you can expect to have to write &quot;split code&quot; quite
              often. But for a simple app, it does still save a lot of time than if you were to
              develop two separate native apps. It&apos;s a framework with a lot of potential.
            </p>

            <p className="project-summary-text">
              Check it out on the <a href="https://play.google.com/store/apps/details?id=com.teslaspotting">Play Store</a> (coming soon to the App Store)!
            </p>

            <div className="project-summary-icons">
              <IconButton navigateTo="https://play.google.com/store/apps/details?id=com.teslaspotting">
                <span className="fa fa-android"></span>
              </IconButton>
              <IconButton navigateTo="https://github.com/Joonpark13/tesla-spotting">
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>

          <ProjectDisplay title="Superhero Fueling" img={SuperheroScreenshot}>
            <p className="project-summary-text highlight">
              Encouraging children to eat better.
            </p>
            <p className="project-summary-text">
              Superhero Fueling is an app for children that gameifies their eating habits and
              encourages them to eat more healthily. As they or their parents input the foods
              they eat into the app, the superhero will either fly - and save the day - or fall,
              depending on how healthy their choice of foods was.
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
              <IconButton navigateTo="https://github.com/eecs394-f16/Superhero-Fueling">
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>

          <ProjectDisplay title="Scholarships.com">
            <p className="project-summary-text">
              While interning for Scholarships.com, I overhauled their two affiliate sites: RightStudent
              and ASM Omnichannel, as well as redesigned a few pages on Scholarships.com. Many of the
              pages I worked on needed a fresh, modern redesign. Focus was placed on seamlessly
              responsive layouts and extremely intuitive page designs. Contact me for more details.
            </p>
          </ProjectDisplay>

          <ProjectDisplay title="JoonPark.me (v1)">
            <p className="project-summary-text">
              The previous version of this website was designed to encompass the various
              aspects of my life. The challenge was twofold: I needed a site design that would
              showcase my skills and reflect my personality, and I wanted to fully utilize the power
              of HTML and CSS3. I forced myself to use minimal JavaScript to build the site, allowing me
              to focus on improving my HTML/CSS skills.
            </p>
            <p className="project-summary-text">
              I quickly realized that I needed a more developer-centric portfolio website, and
              redesigned the site as seen here incorporating elements from <a href="https://material.io/">Material Design</a>.
            </p>
            <div className="project-summary-icons">
              <IconButton navigateTo="https://github.com/Joonpark13/joonpark.me-OLD">
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>
        </div>
      </div>
    </ContentPage>
  );
}