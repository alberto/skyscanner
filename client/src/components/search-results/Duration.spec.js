/* eslint-env jest */
import React from 'react';
import Duration from './Duration';
import {shallow} from 'enzyme';

describe('Duration', () => {

  it('renders duration in hours and minutes', () => {
    const wrapper = shallow(
      <Duration minutes={90} />
    );
    expect(wrapper.text()).toEqual("1h 30");
  });

  it('doesnt renders minutes when 0', () => {
    const wrapper = shallow(
      <Duration minutes={120} />,
    );
    expect(wrapper.text()).toEqual("2h");
  });
});
