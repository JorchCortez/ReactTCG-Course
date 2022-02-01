import './ExpensesList.css'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

const ExpensesList = (props) => {

    if(props.items.length === 0){
        return <p className='expense-404'>No expenses found</p>;
    }
    return(
        <ul className='expenses-list'>
            {props.items.map((e, i)=>  (
                <ExpenseItem 
                    key={i} 
                    title={e.title} 
                    amount={e.amount} 
                    date={e.date} 
                />
            ))}
        </ul>
    )


}
export default ExpensesList;