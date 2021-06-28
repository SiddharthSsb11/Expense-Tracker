import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
//import { version } from 'react-dom';

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Printer Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 1799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Bike Insurance',
    amount: 1294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 4550,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    console.log('In App.js', expense);
    setExpenses( (prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses data ={expenses}></Expenses>
    </div>
  );
}

export default App;