import React, {useState} from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import ExpenseFilter from './ExpenseFilter/ExpenseFilter' 
import Card from '../UI/Card/Card'

const Expenses = (props) => {  
    const [filterOption, setFilterOption] = useState('');

    const ExpenseFilterHandler = (e) => {
        setFilterOption(e.target.value); 
        console.log(filterOption)
    } 
    return (
        <Card className="expenses">
            <ExpenseFilter onFilterChange={ExpenseFilterHandler} />
            {props.expenses.map((e,i) => <ExpenseItem key={i} title={e.title} date={e.date} amount={e.amount} />)}
        </Card>
    )
}

export default Expenses;