import React from 'react';
import styled from 'styled-components';

type TextProps = {
  bold?: boolean;
  small?: boolean;
  children: React.ReactNode;
};

const Span = styled.span`
  ${({ bold }: TextProps) => (bold ? 'font-weight: bold;' : '')}
  ${({ small }: TextProps) => (small ? 'font-size: var(--typescale-5);' : '')}
`;

export default function Text({
  bold = false,
  small = false,
  children,
}: TextProps) {
  return (
    <Span bold={bold} small={small}>
      {children}
    </Span>
  );
}
