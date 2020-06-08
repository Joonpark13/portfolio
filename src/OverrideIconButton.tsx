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
  navigateTo?: string;
  children: React.ReactNode;
}

function OverrideIconButton({
  className = '',
  navigateTo,
  children,
  ...rest
}: OverrideIconButtonProps) {
  const classes = useStyles();

  function navigateToURL(url: string) {
    window.location.href = url;
  }

  return (
    <IconButton
      className={`${classes.iconButton} ${className}`}
      onClick={navigateTo ? () => navigateToURL(navigateTo) : undefined}
      {...rest}
    >
      {children}
    </IconButton>
  );
}

export default OverrideIconButton;
