import React from 'react';
import BpkArrowIcon from 'bpk-component-icon/sm/price-alerts';
import BpkButton from 'bpk-component-button';

import './SearchControls.scss';

const SearchControls = () => (
  <div className="SearchControls">
    <div className="SearchControls__action"><BpkButton link>Filter</BpkButton></div>
    <div className="SearchControls__action"><BpkButton link>Sort</BpkButton></div>
    <div className="SearchControls__action">
      <BpkButton link>
        <BpkArrowIcon className="SearchControls__icon-alert" />
        <span>Price alerts</span>
      </BpkButton>
      </div>
  </div>
);

export default SearchControls;
