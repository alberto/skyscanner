import React from 'react';
import BpkArrowIcon from 'bpk-component-icon/lg/long-arrow-right';
import BpkButton from 'bpk-component-button';
import BpkCard from 'bpk-component-card';


import './SearchResults.scss';

const logo = 'https://logos.skyscnr.com/images/airlines/favicon/EZ.png';

const card = (
  <BpkCard className="SearchResults__item">
    <div className="SearchResults__leg">
      <img className="SearchResults__airline-logo" alt="Skyscanner" src={logo}/>
      <div className="SearchResults__leg-details">
        <div className="SearchResults__Station">
          <div className="SearchResults__time">07:00</div>
          <div className="SearchResults__station">EDI</div>
        </div>
        <BpkArrowIcon className="SearchResults__arrow" />
        <div className="SearchResults__Station">
          <div className="SearchResults__time">08:30</div>
          <div className="SearchResults__station">LHR</div>
        </div>
      </div>
      <div className="SearchResults__duration">
        <div className="SearchResults__time-lapse">1h 30</div>
        <div className="SearchResults__stops SearchResults__stops--0">Direct</div>
      </div>
    </div>
    <div className="SearchResults__leg">
      <img className="SearchResults__airline-logo" alt="Skyscanner" src={logo}/>
      <div className="SearchResults__leg-details">
        <div className="SearchResults__Station">
          <div className="SearchResults__time">14:30</div>
          <div className="SearchResults__station">LHR</div>
        </div>
        <BpkArrowIcon className="SearchResults__arrow" />
        <div className="SearchResults__Station">
          <div className="SearchResults__time">16:00</div>
          <div className="SearchResults__station">EDI</div>
        </div>
      </div>
      <div className="SearchResults__duration">
        <div className="SearchResults__time-lapse">1h 30</div>
        <div className="SearchResults__stops SearchResults__stops--0">Direct</div>
      </div>
    </div>
    <div className="SearchResults__main-quote">
      <div>
        <div className="SearchResults__price">£98</div>
        <div className="SearchResults__agent">omegaflightstore.com</div>
      </div>
      <BpkButton className="SearchResults__select">Select</BpkButton>
    </div>
  </BpkCard>
);

const SearchResults = () => (
  <div className="SearchResults">
    {card}
    {card}
  </div>
);

export default SearchResults;
