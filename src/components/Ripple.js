import React from 'react';
import Button from 'material-ui/Button';

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
        <Button style={style}>
            {props.children}
        </Button>
    );
};

export default Ripple;
