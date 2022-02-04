import './AddUser.css'
import Card from '../../UI/Card/Card';
const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }


    return(
        <Card>
            <form onSubmit={addUserHandler}>
                <div className='form-control'> 
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" />
                </div>
                <div className='form-control'> 
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" />
                </div>
                    <button type="submit">Add User</button>
            </form>
        </Card>
    )

}

export default AddUser;
