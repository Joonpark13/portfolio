import React from 'react';
import styled from 'styled-components';

const TalkCardBase = styled.div`
  background-color: var(--cerulean-1);
  padding: 20px;
`;

const TalkCardTitle = styled.h3`
  margin-bottom: 10px;
`;

type TalkCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function TalkCard({ title, children }: TalkCardProps) {
  return (
    <TalkCardBase>
      <TalkCardTitle>{title}</TalkCardTitle>
      {children}
    </TalkCardBase>
  );
}
