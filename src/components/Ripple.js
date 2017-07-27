import React from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

const Ripple = (props) => {
    // Negate unwanted button styles
    const btnStyle = {
        padding: 0,
        margin: 0,
        backgroundColor: 'transparent',
        textTransform: 'none',
        display: 'block',
        width: '100%'
    };

    const style = {
        ...btnStyle,
        ...props.style
    };

    return (
        <Button disableRipple={props.disabled} style={style}>
            {props.children}
        </Button>
    );
};

export default Ripple;

Ripple.propTypes = {
    disable: PropTypes.bool
};
