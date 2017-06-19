/* eslint-env jest */
import React from 'react';
import Time from './Time';
import {shallow} from 'enzyme';

describe('Time', () => {
  it('renders time as hh:mm', () => {
    const wrapper = shallow(
      <Time datetime="2017-06-01T08:30:38" />
    );
    expect(wrapper.text()).toEqual("08:30");
  });
});
