import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

type RippleProps = {
  style?: ButtonProps['style'];
  disabled?: boolean;
  children: React.ReactNode;
};

function Ripple({ style = {}, disabled = false, children }: RippleProps) {
  // Negate unwanted button styles
  const btnStyle: ButtonProps['style'] = {
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
    textTransform: 'none',
    display: 'block',
    width: '100%'
  };

  const mergedStyles = {
    ...btnStyle,
    ...style
  };

  return (
    <Button disableRipple={disabled} style={mergedStyles}>
        {children}
    </Button>
  );
}

export default Ripple;
