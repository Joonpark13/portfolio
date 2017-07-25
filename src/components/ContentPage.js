import React from 'react';

import StripeCard from './StripeCard';

const ContentPage = (props) => {
    return (
        <div className="page content-page">
            <StripeCard>
                <h2>{props.title}</h2>
            </StripeCard>

            <div className="content-width-wrapper">
                {props.children}
            </div>
        </div>
    );
};

export default ContentPage;
