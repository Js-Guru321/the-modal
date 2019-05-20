import React from 'react';
import { shallow } from 'enzyme';
import SignUpOptions from './SignUpOptions';

describe('SignUpOptions component', () => {
    const wrapper = shallow(<SignUpOptions />);

    test('it renders', () => {
        expect(wrapper.exists()).toBe(true);
    });
});
