import React from 'react';

const Time = ({datetime}) => {
  return (
    <div className="SearchResults__time">
      {datetime.split('T')[1].slice(0, -3)}
    </div>
  );
}

export default Time;
