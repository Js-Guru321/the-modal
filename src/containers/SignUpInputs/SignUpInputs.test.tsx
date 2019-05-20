import React from 'react';
import { shallow } from 'enzyme';
import SignUpInputs from './SignUpInputs';

describe('SignUpInputs component', () => {
    const wrapper = shallow(<SignUpInputs />);

    test('it renders', () => {
        expect(wrapper.exists()).toBe(true);
    });
});
