import './Expenses.css'
import ExpenseItem from './ExpenseItem/ExpenseItem'
import Card from '../UI/Card/Card'
const Expenses = (props) => { 
    return (
        <Card className="expenses">
            {props.expenses.map((e,i) => <ExpenseItem key={i} title={e.title} date={e.date} amount={e.amount} /> )}
        </Card>
    )
}

export default Expenses;