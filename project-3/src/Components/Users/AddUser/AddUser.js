import './AddUser.css'
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import { useState } from 'react';
const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) return;
        if(+enteredAge < 1) return;
        props.onAddUser(enteredUsername,enteredAge) 
        resetFields();
    }

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    }

    const resetFields = () => {
        setEnteredAge('')
        setEnteredUsername('')
    }

    return(
        <Card>
            <form className='flex-form' onSubmit={addUserHandler}>
                <div className='form-control'> 
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}/>
                </div>
                <div className='form-control'> 
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
                </div>
                    <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;
