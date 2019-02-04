import React from 'react';
import ExpensesSummery from '../../components/ExpensesSummery';
import { shallow } from 'enzyme';



test('should render ExpensesSummery correctly with one expense', () => {
    const wrapper = shallow(<ExpensesSummery expenseCount={1} expensesTotal={235} />);
expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummery correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummery expenseCount={4} expensesTotal={7685021} />);
expect(wrapper).toMatchSnapshot();
});