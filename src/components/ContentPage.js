import React from 'react';
import PropTypes from 'prop-types';

import StripeCard from './StripeCard';

const ContentPage = ({ title, children, ...rest }) => (
  <div {...rest} className="page content-page">
    <StripeCard>
      <h2>{title}</h2>
    </StripeCard>

    <div className="content-width-wrapper">
      {children}
    </div>
  </div>
);

export default ContentPage;

ContentPage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ContentPage.defaultProps = {
  title: '',
  children: undefined,
};
