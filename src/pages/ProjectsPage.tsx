import React from 'react';
import SerifScreenshot from '../images/SerifNu.PNG';
import CRScreenshot from '../images/CensusReporter.PNG';
import SuperheroScreenshot from '../images/SuperheroFueling.PNG';
import TeslaLogo from '../images/transparentTeslaLogo.png';
import SQLMurderMysteryImage from '../images/SQLMurderMystery.png';
import Link from '../components/Link';
import ProjectDisplay from '../components/ProjectDisplay';
import ContentPage from '../components/ContentPage';
import IconButton from '../components/OverrideIconButton';
import Text from '../components/Text';
import './ProjectsPage.css';

export default function ProjectsPage() {
  return (
    <ContentPage title="Projects">
      <div id="projects-content">
        <div className="large-project-display">
          <ProjectDisplay title="Serif.nu" img={SerifScreenshot} large>
            <p className="project-summary-text highlight">
              Simple. Fast. Visual. Course scheduling for Northwestern
              Unviersity.
            </p>
            <p className="project-summary-text">
              <Link href="https://serif.nu">Serif.nu</Link> was a course
              scheduling web app designed to help Northwestern students plan
              their course schedules more easily and quickly. The project aimed
              to address frustrations in using Northwestern&apos;s own course
              registration system, but it became my introduction to JavaScript
              and web development in general. The first version (created using{' '}
              <Text bold>Flask</Text> and
              <Text bold> PostgreSQL</Text>) was released Fall 2015, and a new
              version (rebuilt from scratch using <Text bold>React</Text> and
              <Text bold> Node.js</Text>) was released Winter 2017.
            </p>
            <p className="project-summary-text">
              Serif.nu served not only as my gateway into web development, but
              also taught me about what it takes to turn an idea into a product
              under tight schedules. I even learned a few non-technical skills
              along the way, like how to market a product and how to pitch an
              idea to potential partners.
            </p>
            <p className="project-summary-text highlight">
              Serif.nu was the first place winner of the Northwestern IEEE
              Project Showcase.
            </p>
            <div className="project-summary-icons">
              <IconButton navigateTo="https://github.com/Joonpark13/serif.nu">
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>

          <ProjectDisplay
            title="SQL Murder Mystery"
            img={SQLMurderMysteryImage}
            large
          >
            <p className="project-summary-text highlight">
              Use SQL to research clues and find out whodunit!
            </p>

            <p className="project-summary-text">
              Inspired by the{' '}
              <Link href="https://github.com/veltman/clmystery">
                command line murder mystery
              </Link>
              , I created this{' '}
              <Link href="https://mystery.knightlab.com/">
                SQL murder mystery
              </Link>{' '}
              with the help of Cathy He and Joe Germuska as part of my work as a
              fellow at the Northwestern University{' '}
              <Link href="https://knightlab.northwestern.edu/">Knight Lab</Link>
              . We think it's a great way to learn or practice your SQL skills -
              hope you have fun solving it!
            </p>
            <p className="project-summary-text highlight">
              SQL Murder Mystery was featured on{' '}
              <Link href="https://lifehacker.com/learn-and-practice-sql-with-this-game-1840484299">
                Lifehacker
              </Link>{' '}
              and{' '}
              <Link href="https://news.ycombinator.com/item?id=21799988">
                Hacker News
              </Link>
              .
            </p>
            <div className="project-summary-icons">
              <IconButton navigateTo="https://mystery.knightlab.com/">
                <i className="fa fa-external-link-alt"></i>
              </IconButton>
              <IconButton navigateTo="https://github.com/NUKnightLab/sql-mysteries">
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>

          <ProjectDisplay title="Census Reporter" img={CRScreenshot} large>
            <p className="project-summary-text">
              <Link href="https://censusreporter.org">Census Reporter</Link>{' '}
              aims to simplify access to U.S. census data. My focus was to
              implement full-text search in the Census Reporter API, and to
              design a search results page. I also worked on generating sitemaps
              and making data download files more human-friendly.
            </p>
            <p className="project-summary-text">
              Census Reporter was built using <Text bold>Django</Text>,
              <Text bold> Flask</Text>, and <Text bold>PostgreSQL</Text>.
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
          <ProjectDisplay title="Tuning Teacher">
            <p className="project-summary-text highlight">
              A way to improve your fine pitch skills for trained musicians.
            </p>
            <p className="project-summary-text">
              More information coming soon!
            </p>
            <div className="project-summary-icons">
              <IconButton navigateTo="https://github.com/joonpark13/tuning-teacher">
                <span className="fa fa-github"></span>
              </IconButton>
              <IconButton navigateTo="https://tuning-teacher.netlify.app/">
                <i className="fa fa-external-link-alt"></i>
              </IconButton>
            </div>
          </ProjectDisplay>

          <ProjectDisplay title="Rummy 500">
            <p className="project-summary-text highlight">
              A 2 player online multiplayer verson of Rummy 500.
            </p>
            <p className="project-summary-text">
              Rummy 500 was created for my Rummy enthusiast friends and I to be
              able to play online during the COVID-19 pandemic stay-at-home
              orders. It was also used to teach myself TypeScript, specifically
              using TypeScript in conjuction with React and Firebase.
            </p>
            <p className="project-summary-text">
              More information coming soon!
            </p>
            <div className="project-summary-icons">
              <IconButton navigateTo="https://github.com/Joonpark13/rummy">
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>

          <ProjectDisplay title="TeslaSpotting" img={TeslaLogo}>
            <p className="project-summary-text highlight">
              Capture the Teslas you see on the streets!
            </p>

            <p className="project-summary-text">
              TeslaSpotting was a small project created for the purpose of
              teaching myself <Text bold>React Native</Text>.
            </p>
            <p className="project-summary-text">
              I&apos;ve found that React Native does indeed bring the joy of
              component architecture to mobile app development while still
              allowing developers to end up with a native product for both
              platforms. As a huge fan of React, this was a no-brainer framework
              to try out.
            </p>
            <p className="project-summary-text">
              However, React Native is still young and has a lot of room for
              growth. Many functionalities are still split between iOS and
              Android, so you can expect to have to write &quot;split code&quot;
              quite often. But for a simple app, it does still save a lot of
              time than if you were to develop two separate native apps.
              It&apos;s a framework with a lot of potential.
            </p>
          </ProjectDisplay>

          <ProjectDisplay title="Superhero Fueling" img={SuperheroScreenshot}>
            <p className="project-summary-text highlight">
              Encouraging children to eat better.
            </p>
            <p className="project-summary-text">
              Superhero Fueling is an app for children that gameifies their
              eating habits and encourages them to eat more healthily. As they
              or their parents input the foods they eat into the app, the
              superhero will either fly - and save the day - or fall, depending
              on how healthy their choice of foods was.
            </p>
            <p className="project-summary-text">
              This app was built in over the course of five weeks for the
              Northwestern University
              <Link href="https://www.cs.northwestern.edu/academics/courses/394/">
                {' '}
                EECS 394{' '}
              </Link>
              course as part of a four-person student developer team. Through
              working with real client managers, we practiced{' '}
              <Text bold>agile</Text> methodologies and learned about the
              product launch cycle.
            </p>
            <p className="project-summary-text">
              Superhero Fueling was built using{' '}
              <Text bold>Appgyver Supersonic</Text> and{' '}
              <Text bold>Angular</Text>.
            </p>
            <div className="project-summary-icons">
              <IconButton navigateTo="https://github.com/eecs394-f16/Superhero-Fueling">
                <span className="fa fa-github"></span>
              </IconButton>
            </div>
          </ProjectDisplay>

          <ProjectDisplay title="Scholarships.com">
            <p className="project-summary-text">
              While interning for Scholarships.com, I overhauled their two
              affiliate sites: RightStudent and ASM Omnichannel, as well as
              redesigned a few pages on Scholarships.com. Many of the pages I
              worked on needed a fresh, modern redesign. Focus was placed on
              seamlessly responsive layouts and extremely intuitive page
              designs. Contact me for more details.
            </p>
          </ProjectDisplay>

          <ProjectDisplay title="JoonPark.me (v1)">
            <p className="project-summary-text">
              The previous version of this website was designed to encompass the
              various aspects of my life. The challenge was twofold: I needed a
              site design that would showcase my skills and reflect my
              personality, and I wanted to fully utilize the power of HTML and
              CSS3. I forced myself to use minimal JavaScript to build the site,
              allowing me to focus on improving my HTML/CSS skills.
            </p>
            <p className="project-summary-text">
              I quickly realized that I needed a more developer-centric
              portfolio website, and redesigned the site as seen here
              incorporating elements from{' '}
              <Link href="https://material.io/">Material Design</Link>.
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
