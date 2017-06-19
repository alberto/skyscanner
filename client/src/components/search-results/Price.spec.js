/* eslint-env jest */
import React from 'react';
import Price from './Price';
import {shallow} from 'enzyme';

describe('Price', () => {
  it('renders amount with currency', () => {
    const wrapper = shallow(
      <Price amount={80} />
    );
    expect(wrapper.text()).toEqual("£80");
  });

  it('rounds down below .50', () => {
    const wrapper = shallow(
      <Price amount={90.49} />,
    );
    expect(wrapper.text()).toEqual("£90");
  });

  it('rounds up from .50', () => {
    const wrapper = shallow(
      <Price amount={90.50} />,
    );
    expect(wrapper.text()).toEqual("£91");
  });
});
