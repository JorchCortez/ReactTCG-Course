import Expenses from "./components/Expenses/Expenses";

function App() {

  const expenses = [
    {title:"fancy dinner", amount:250.45, date: new Date()},
    {title:"Van Trip", amount:550.00, date: new Date(2021,11,8)},
    {title:"Yeet", amount:50.75, date: new Date(2021,11,24)},
    {title:"MX Trip", amount:2500.00, date: new Date(2022,0,5)}

  ]
  return (
    <div>
        <h2>Hello There!</h2>
        <p>asdfgh</p>
        <Expenses expenses={expenses} />
        
    </div>
  );
}

export default App;
