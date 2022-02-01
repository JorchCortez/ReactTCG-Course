import React, {useState} from 'react'

const ExpenseForm = (props) => { 
    
    const [_title, setTitle]    = useState('')
    const [_date, setDate]      = useState('')
    const [_amount, setAmount]  = useState('')

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value)
    }

    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: _title,
            amount:_amount,
            date: new Date(_date)
        }
        setTitle('')
        setDate('')
        setAmount('')
        console.table(expenseData)
        props.onSaveExpenseData(expenseData)
    }

    return (
        <form>
            <div className="form-controls"> 
                <div className="form-control__item">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={_title} placeholder="Title"/>
                </div>
                <div className="form-control__item">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} value={_amount} placeholder={0}/>
                </div>
                <div className="form-control__item">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} value={_date} min="2019-01-01" max="2022-12-31" placeholder={new Date()}/>
                </div>
            </div>
                <div className="form-action"> 
                    <button type="submit" name="Submit" onClick={onSubmitHandler} >Add Expense</button>
                </div>
        </form>
    )
}

export default ExpenseForm;