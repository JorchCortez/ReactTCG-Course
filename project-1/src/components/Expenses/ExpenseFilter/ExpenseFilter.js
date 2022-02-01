 
import './ExpenseFilter.css';

const ExpenseFilter = (props) => { 
 
    const dropdownChangeHandler = (event) => {
        props.onFilterChange(event.target.value);
      };

    return (
        <div className='expenses-filter'>
          <div className='expenses-filter__control'>
            <h2>Filter by year</h2>
            <select value={props.selected} onChange={dropdownChangeHandler}>
              <option value='2022'>2022</option>
              <option value='2021'>2021</option>
              <option value='2020'>2020</option>
              <option value='2019'>2019</option>
            </select>
          </div>
        </div>
    )
}

export default ExpenseFilter;