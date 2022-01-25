import './Expenses.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
const Expenses = (props) => { 
    return (
        <div className="expenses">
            {props.expenses.map((e,i) => <ExpenseItem key={i} title={e.title} date={e.date} amount={e.amount} /> )}
        </div>
    )
}

export default Expenses;