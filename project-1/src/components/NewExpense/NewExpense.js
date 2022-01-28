import './NewExpense.css';
import ExpenseForm from './ExpenseForm/ExpenseForm'
import Card from '../UI/Card/Card'

const NewExpense = (props) => { 
 

    return (
        <Card className='new-expense'>
            <ExpenseForm  updateExpenses={props.updateExpenses} />
        </Card>
    )
}

export default NewExpense;