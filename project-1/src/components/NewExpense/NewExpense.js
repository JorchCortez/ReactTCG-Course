import React, {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm/ExpenseForm'
import Card from '../UI/Card/Card'

const NewExpense = (props) => { 
    const [addingExpense, setAddingExpense] = useState(false)
    const SaveDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString() 
        } 
        props.updateExpenses(expenseData);
        setAddingExpense(false)
    }

    const showFormHandler = () => {
        setAddingExpense(true)
    }

    const hideFormHandler = () => {
        setAddingExpense(false)
    }
    return ( 
        <Card className='new-expense'> 
            {!addingExpense ? <button onClick={showFormHandler} >Add New Expense</button> : 
            <ExpenseForm stopEditing={hideFormHandler} onSaveExpenseData={SaveDataHandler} /> }
        </Card>
    )
}

export default NewExpense;