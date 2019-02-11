import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//this is the component with the information from the store
export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item__message">
                        <span>No expenses</span>
                    </div>
                ) : (
                        props.expenses.map((expense) => {
                            return <ExpenseListItem key={expense.id} {...expense} />
                        })
                    )
            }
        </div>
    </div>
);
//create new higher order coponents using the connect function from reaxt/redux 
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)

    };
};

// call connect and define what we want from the store and define component we want to create the connected version of
export default connect(mapStateToProps)(ExpenseList);