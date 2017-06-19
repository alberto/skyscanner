/* eslint-env jest */
import React from 'react';
import Logo from './Logo';
import {shallow} from 'enzyme';

describe('Logo', () => {
  it('renders carrier image', () => {
    const wrapper = shallow(
      <Logo carrier={{code: 'EZ'}} />
    );
    const expected = "https://logos.skyscnr.com/images/airlines/favicon/EZ.png";
    expect(wrapper.find('img[src]').prop('src')).toEqual(expected);
  });
});
