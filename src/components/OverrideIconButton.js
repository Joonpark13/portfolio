import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

const styles = {
  iconButton: {
    color: 'var(--cerulean-60)',
  },
};

const OverrideIconButton = ({ classes, className, children, ...rest }) => (
  <IconButton className={`${classes.iconButton} ${className}`} {...rest}>
    {children}
  </IconButton>
);

OverrideIconButton.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

OverrideIconButton.defaultProps = {
  children: undefined,
  className: '',
};

export default withStyles(styles)(OverrideIconButton);
