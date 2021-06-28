import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [formActive, setFormActive] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    //console.log(expenseData);
    props.onAddExpense(expenseData);
  }

  const startFormActiveHandler = (e) => {
    //console.log(e);
    setFormActive(true);
  }

  const cancelFormActiveHandler = (e) => {
    setFormActive(false)
  }

  return (
    <div className="new-expense">
      { !formActive && (<button type="button" onClick={startFormActiveHandler}>Add New Expense</button>)}
      { formActive &&(<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel = {cancelFormActiveHandler}/>)}
    </div>
  );
};

export default NewExpense;
