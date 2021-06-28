import React, {useState} from 'react';
import Card from '../UI/Card';
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const onFilterChangeHandler = (selectedYear) => {
    //console.log('Expenses Js Here') 
    //selected year state-up from expenseFilter
    console.log(selectedYear);
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.data.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter = {onFilterChangeHandler} ></ExpensesFilter> 
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses