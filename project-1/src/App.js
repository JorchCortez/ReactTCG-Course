import React, {useState} from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const _expenses = [
  {title:"fancy dinner", amount:250.45, date: new Date()},
  {title:"Van Trip", amount:550.00, date: new Date(2021,11,8)},
  {title:"Yeet", amount:50.75, date: new Date(2021,11,24)},
  {title:"MX Trip", amount:2500.00, date: new Date(2022,0,5)} 
]

function App() {

  const [expenses, setExpenses] = useState(_expenses)

  const updateExpenses = (newExpense) => {
    const _e = [...expenses, newExpense]
    setExpenses(_e)
  }

  return (
    <div>
        <h2>Hello There!</h2>
        <p>asdfgh</p>
        <NewExpense updateExpenses={updateExpenses}/>
        <Expenses expenses={expenses} />
        
    </div>
  );
}

export default App;
