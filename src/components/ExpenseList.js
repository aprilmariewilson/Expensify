import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//this is the component with the information from the store
export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map((expense) => {
                return <ExpenseListItem key= {expense.id} {...expense}/>
            })
        )         
    }

        
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