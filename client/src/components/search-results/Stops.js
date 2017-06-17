import React from 'react';

const Stops = ({count}) => {
  const className = count ? 'SearchResults__stops' : 'SearchResults__stops SearchResults__stops--0';
  return (
    <div className={className}>
      {count ? `${count} stops` : 'Direct'}
    </div>
  );
}

export default Stops;
