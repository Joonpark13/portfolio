import React from 'react';
import styled from 'styled-components';

type TextProps = {
  bold?: boolean;
  children: React.ReactNode;
};

const Span = styled.span`
  ${({ bold }: TextProps) => (bold ? 'font-weight: bold;' : '')}
`;

export default function Text({ bold = false, children }: TextProps) {
  return <Span bold={bold}>{children}</Span>;
}
