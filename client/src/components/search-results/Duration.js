import React from 'react';

const Duration = ({minutes}) => {
  const hours = Math.floor(minutes / 60);
  const leftOverMins = (minutes % 60);
  const mins = leftOverMins ? ` ${leftOverMins}` : '';
  return <div className="SearchResults__time-lapse">{`${hours}h${mins}`}</div>;
}

export default Duration;
