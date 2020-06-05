import React from 'react';

import StripeCard from './StripeCard';

interface ContentPageProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

function ContentPage({ title, children, ...rest }: ContentPageProps) {
  return (
    <div {...rest} className="page content-page">
      <StripeCard>
        <h2>{title}</h2>
      </StripeCard>

      <div className="content-width-wrapper">{children}</div>
    </div>
  );
}

export default ContentPage;
