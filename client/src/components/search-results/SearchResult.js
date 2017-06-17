import React from 'react';
import BpkArrowIcon from 'bpk-component-icon/lg/long-arrow-right';
import BpkButton from 'bpk-component-button';
import BpkCard from 'bpk-component-card';

const logo = (carrier) => `https://logos.skyscnr.com/images/airlines/favicon/${carrier}.png`;

const time = (datetime) => {
  return datetime.split('T')[1].slice(0, -3);
}

const duration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = (minutes % 60);
  const someMin = mins ? ` ${mins}` : '';
  return `${hours}h${someMin}`;
}

const stops = (count) => {
  const className = count ? 'SearchResults__stops' : 'SearchResults__stops SearchResults__stops--0'; 
  return (
    <div className={className}>
      {count ? `${count} stops` : 'Direct'}
    </div>
  );
}

const leg = (leg) => (
  <div className="SearchResults__leg">
    <img className="SearchResults__airline-logo" alt="Skyscanner" src={logo(leg.carrier.code)}/>
    <div className="SearchResults__leg-details">
      <div className="SearchResults__Station">
        <div className="SearchResults__time">{time(leg.departure)}</div>
        <div className="SearchResults__station">{leg.origin.code}</div>
      </div>
      <BpkArrowIcon className="SearchResults__arrow" />
      <div className="SearchResults__Station">
        <div className="SearchResults__time">{time(leg.arrival)}</div>
        <div className="SearchResults__station">{leg.destination.code}</div>
      </div>
    </div>
    <div className="SearchResults__duration">
      <div className="SearchResults__time-lapse">{duration(leg.duration)}</div>
      {stops(leg.stops)}
    </div>
  </div>
);

const price = (amount) => (
  <div className="SearchResults__price">£{Math.round(amount)}</div>
);

const SearchResult = ({result, style}) => (
  <div className="SearchResults__item" style={style}>
    <BpkCard>
      {leg(result.outbound)}
      {leg(result.inbound)}

      <div className="SearchResults__main-quote">
        <div>
          {price(result.pricing.price)}
          <div className="SearchResults__agent">{result.pricing.agent.name}</div>
        </div>
        <BpkButton className="SearchResults__select" href={result.pricing.url}>Select</BpkButton>
      </div>
    </BpkCard>
  </div>
);

export default SearchResult;