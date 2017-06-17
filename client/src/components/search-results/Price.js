import React from 'react';

const Price = ({amount}) => (
  <div className="SearchResults__price">£{Math.round(amount)}</div>
);

export default Price;
