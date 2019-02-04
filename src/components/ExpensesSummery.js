import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/selectExpenseTotal';
import numeral from 'numeral';

//show how many items and a running total for the items
 export const ExpensesSummery = ({expenseCount, expensesTotal}) => {
 const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
 const formattedExpensesTotal = numeral(expensesTotal / 100).format(' $0,0.00');
    return(
    <div>
    <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}. </h1>
</div>
 );
}
const mapStateToProps = (state) => {
const visibleExpenses = selectExpenses(state.expenses, state.filters);

return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummery);