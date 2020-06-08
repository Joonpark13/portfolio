import React from 'react';
import styled from 'styled-components';

type LinkProps = {
  href: string;
  color?: string;
  children: React.ReactNode;
};

const A = styled.a`
  color: ${({ color }: LinkProps) => (color ? color : 'var(--cerulean-60)')};
`;

function Link({ href, children, color }: LinkProps) {
  return (
    <A color={color} href={href}>
      {children}
    </A>
  );
}

export default Link;
