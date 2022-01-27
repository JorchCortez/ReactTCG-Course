import React, {useState} from 'react'

import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../../UI/Card/Card'

const ExpenseItem = (props) => { 

    const [title, setTitle] = useState(props.title);

    const onClickHandler = () =>{
        setTitle("title was clicked")
        alert("Clicked!")
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description" ><h2>{title}</h2></div>
            <button onClick={onClickHandler}>Change Title</button>
            <div className="expense-item__price" >$ {props.amount}</div>
        </Card>
    )
}

export default ExpenseItem;