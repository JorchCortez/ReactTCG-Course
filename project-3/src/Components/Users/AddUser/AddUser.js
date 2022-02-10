import './AddUser.css'
import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }


    return(
        <Card>
            <form className='flex-form' onSubmit={addUserHandler}>
                <div className='form-control'> 
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" />
                </div>
                <div className='form-control'> 
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" />
                </div>
                    <Button type="submit">Add User</Button>
            </form>
        </Card>
    )

}

export default AddUser;
