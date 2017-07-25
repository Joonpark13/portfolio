import React from 'react';
import PropTypes from 'prop-types';

import '../css/StripeCard.css';

const StripeCard = (props) => {
    let style = { borderBottom: '3px solid var(--cerulean-40)' };
    if (props.stripeColor) {
        style = { borderBottom: `3px solid ${props.stripeColor}` };
    }

    return (
        <div className="stripe-card-container">
            <div style={style} className="left-stripe-card"></div>
            <div className="stripe-card-spacer"></div>
            <div style={style} className="center-stripe-card">
                {props.children}
            </div>
            <div className="stripe-card-spacer"></div>
            <div style={style} className="right-stripe-card"></div>
        </div>
    );
};

export default StripeCard;

StripeCard.PropTypes = {
    stripeColor: PropTypes.string
};
