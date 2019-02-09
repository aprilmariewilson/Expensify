import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummery } from '../../components/ExpensesSummery';

test('should correctly render ExpensesSummery with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummery expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummery with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummery expenseCount={3} expensesTotal={14235} />);
    expect(wrapper).toMatchSnapshot();
});

