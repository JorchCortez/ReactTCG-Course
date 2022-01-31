 
const ExpenseFilter = (props) => { 
 

    return (
        <select onChange={props.onFilterChange}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select> 
    )
}

export default ExpenseFilter;