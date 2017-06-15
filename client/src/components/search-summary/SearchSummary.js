import React from 'react';
import BpkArrowIcon from 'bpk-component-icon/lg/long-arrow-right';

import './SearchSummary.scss';

const SearchSummary = () => (
  <div className="SearchSummary">
    <div className="SearchSummary__places"><span>EDI</span><BpkArrowIcon className="SearchSummary__arrow" /><span>LON</span></div>
    <div>2 travellers, economy</div>
  </div>
);

export default SearchSummary;
