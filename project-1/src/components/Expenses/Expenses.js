import React, {useState} from 'react'
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter' 
import Card from '../UI/Card/Card'
import ExpensesList from './ExpensesList/ExpensesList'
import ExpensesChart from './ExpensesChart/ExpensesChart'
const Expenses = (props) => {  

    const [filterOption, setFilterOption] = useState('2022');  

    const ExpenseFilterHandler = (selectedYear) => {
        setFilterOption(selectedYear);  
    };

    const filteredExpenses = props.expenses.filter(exp => {
        return exp.date.getFullYear().toString() === filterOption;
    })

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filterOption} onFilterChange={ExpenseFilterHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;