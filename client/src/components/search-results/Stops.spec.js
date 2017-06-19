/* eslint-env jest */
import React from 'react';
import Stops from './Stops';
import {shallow} from 'enzyme';

describe('Stops', () => {
  it('renders direct flights', () => {
    const wrapper = shallow(
      <Stops count={0} />
    );
    expect(wrapper.text()).toEqual("Direct");
  });

  it('renders 1 stop', () => {
    const wrapper = shallow(
      <Stops count={1} />,
    );
    expect(wrapper.text()).toEqual("1 stop");
  });

  it('renders 2 stops', () => {
    const wrapper = shallow(
      <Stops count={2} />,
    );
    expect(wrapper.text()).toEqual("2 stops");
  });
});
