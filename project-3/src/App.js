import AddUser from './Components/Users/AddUser/AddUser';
import UsersList from './Components/Users/UsersList/UsersList';
import './App.css';
import { useState } from 'react';
function App() {

  const [users, setUsers] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsers) => {
      return[...prevUsers, {name: uName, age: uAge}]
    });
  }


  return (
    <div className="App">  
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
