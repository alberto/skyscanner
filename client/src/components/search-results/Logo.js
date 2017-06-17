import React from 'react';

const Logo = ({carrier}) => (
  <img
    className="SearchResults__airline-logo"
    alt="Skyscanner"
    src={`https://logos.skyscnr.com/images/airlines/favicon/${carrier.code}.png`}/>
);

export default Logo;
