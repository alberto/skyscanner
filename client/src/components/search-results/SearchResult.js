import React from 'react';
import BpkButton from 'bpk-component-button';
import BpkCard from 'bpk-component-card';

import Leg from './Leg';
import Price from './Price';

const SearchResult = ({result, style}) => (
  <div className="SearchResults__item" style={style}>
    <BpkCard>
      <Leg {...result.outbound} />
      <Leg {...result.inbound} />

      <div className="SearchResults__main-quote">
        <div>
          <Price amount={result.pricing.price} />
          <div className="SearchResults__agent">{result.pricing.agent.name}</div>
        </div>
        <BpkButton className="SearchResults__select" href={result.pricing.url}>Select</BpkButton>
      </div>
    </BpkCard>
  </div>
);

export default SearchResult;
