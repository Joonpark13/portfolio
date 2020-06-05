import React from 'react';

import './StripeCard.css';

interface StripeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  stripeColor?: string,
  children: React.ReactNode,
}

function StripeCard({ stripeColor, children, ...rest }: StripeCardProps) {

  let style = { borderBottom: '3px solid var(--cerulean-40)' };
  if (stripeColor) {
    style = { borderBottom: `3px solid ${stripeColor}` };
  }

  return (
    <div {...rest} className="stripe-card-container">
      <div style={style} className="left-stripe-card"></div>
      <div className="stripe-card-spacer"></div>
      <div style={style} className="center-stripe-card">
        {children}
      </div>
      <div className="stripe-card-spacer"></div>
      <div style={style} className="right-stripe-card"></div>
    </div>
  );
}

export default StripeCard;
