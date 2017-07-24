import React from 'react';

import '../css/StripeCard.css';

const StripeCard = (props) => {
    return (
        <div className="stripe-card-container">
            <div className="left-stripe-card"></div>
            <div className="stripe-card-spacer"></div>
            <div className="center-stripe-card">
                {props.children}
            </div>
            <div className="stripe-card-spacer"></div>
            <div className="right-stripe-card"></div>
        </div>
    );
};

export default StripeCard;
