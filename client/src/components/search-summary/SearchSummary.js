import React from 'react';
import BpkArrowIcon from 'bpk-component-icon/lg/long-arrow-right';

import './SearchSummary.scss';

const SearchSummary = ({search}) => (
  <div className="SearchSummary">
    <div className="SearchSummary__places">
      <span>{search.fromPlace}</span><BpkArrowIcon className="SearchSummary__arrow" /><span>{search.toPlace}</span>
    </div>
    <div>{search.adults} travellers, {search.class}</div>
  </div>
);

export default SearchSummary;
