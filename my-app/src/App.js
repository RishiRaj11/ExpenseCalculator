import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpenses";

// Destructuring/Deserealizing

function App() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  /*
    return  React.createElement(
      'div',{},React.createElement('h2',{},"Let's start"),
      React.createElement(Expenses,{items:expenses})
    );
    */
  //Above return Statement and below both work same but below is jsx code i.e easy to read
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    //console.log(expense);
    setExpenses((expenses) => {
      return [expense, ...expenses];
    });
    //console.log(expense);
  }
  return (
    <div>
      <h2>Let's  start</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );


}

export default App;
