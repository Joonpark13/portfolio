import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, IconButtonProps } from '@material-ui/core';

const useStyles = makeStyles({
  iconButton: {
    color: 'var(--cerulean-60)',
  },
});

interface OverrideIconButtonProps extends IconButtonProps {
  className?: string;
  children: React.ReactNode;
}

function OverrideIconButton({ className = '', children, ...rest }: OverrideIconButtonProps) {
  const classes = useStyles();
  return (
    <IconButton className={`${classes.iconButton} ${className}`} {...rest}>
      {children}
    </IconButton>
  );
}

export default OverrideIconButton;
