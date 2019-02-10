import React from 'react';
import { shallow } from 'enzyme';
import { LogInPage } from '../../components/Login';


test('should render the LogInPage correctly', () => {
    const wrapper = shallow(<LogInPage startLogIn={() => { }}/>);
    expect(wrapper).toMatchSnapshot();
});
test('should call startLogIn on button click', () => {
    const startLogin=jest.fn();
    const wrapper = shallow(<LogInPage />);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled
});