import React from 'react';
import styled from 'styled-components';
import ContentPage from '../components/ContentPage';
import TalkCard from '../components/TalkCard';
import Text from '../components/Text';

const ContentPageWrapper = styled.div`
  padding: 20px;
`;

const TalkDescription = styled.div`
  margin-bottom: 10px;
`;

const TalkCardWrapper = styled.div`
  margin-bottom: 20px;
`;

export default function TalksPage() {
  return (
    <ContentPage title="Talks">
      <ContentPageWrapper>
        <TalkCardWrapper>
          <TalkCard title="Good Internal Documentation Is...">
            <TalkDescription>
              First presented at:{' '}
              <Text bold>Grubhub Lightning Talks, Inaugural Round</Text>
            </TalkDescription>
            <TalkDescription>
              We all know what good documentation is when we read it, but how do
              we write some ourselves? How do we write and maintain
              documentation that works for myself, my team, my entire company?
              Everyone knows that documentation is important, yet it is often
              one of the most neglected areas of a company's culture. By
              thinking critically about what makes good internal documentation,
              we can start to form a community that understands the whats, the
              whys, and the hows of documentation.
            </TalkDescription>
            <TalkDescription>
              We'll discuss some general characteristics of good documentation,
              and go on to talk about some concrete steps that you can take to
              make your documentation meet those characteristics. We'll also
              discuss details about frontend (specifically React) code and how
              you can apply these principles there.
            </TalkDescription>
          </TalkCard>
        </TalkCardWrapper>

        <TalkCardWrapper>
          <TalkCard title="Building a Multiplayer Card Game with React, Typescript, and Firebase">
            <TalkDescription>
              First presented at:{' '}
              <Text bold>Chicago React Meetup, Virtual Lightning Talks</Text>
            </TalkDescription>
            <TalkDescription>
              Firebase is the go-to for many developers when they need a quick
              storage or authentication solution for a personal project. Often,
              React is also their choice of frontend framework. If you've used
              them before, you know that Firebase + React can make for a
              powerful combination in getting your idea to production quickly. I
              recently built a version of Rummy 500 for two players to be able
              to play in real-time using that exact stack, but with the addition
              of TypeScript. We'll go over a few reasons that make this trio
              such a great package, and some quick tips on building your own
              React + Firebase + TypeScript project.
            </TalkDescription>
          </TalkCard>
        </TalkCardWrapper>

        <TalkCard title="Teaching React">
          <TalkDescription>Description coming soon!</TalkDescription>
        </TalkCard>
      </ContentPageWrapper>
    </ContentPage>
  );
}
