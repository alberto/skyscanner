import React from 'react';
import BpkArrowIcon from 'bpk-component-icon/lg/long-arrow-right';

import Logo from './Logo';
import Time from './Time';
import Duration from './Duration';
import Stops from './Stops';

const Leg = ({carrier, departure, origin, arrival, destination, duration, stops}) => (
  <div className="SearchResults__leg">
    <Logo carrier={carrier} />
    <div className="SearchResults__leg-details">
      <div className="SearchResults__Station">
        <Time datetime={departure} />
        <div className="SearchResults__station">{origin.code}</div>
      </div>
      <BpkArrowIcon className="SearchResults__arrow" />
      <div className="SearchResults__Station">
        <Time datetime={arrival} />
        <div className="SearchResults__station">{destination.code}</div>
      </div>
    </div>
    <div className="SearchResults__duration">
      <Duration minutes={duration} />
      <Stops stops={stops} />
    </div>
  </div>
);

export default Leg;
