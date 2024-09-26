

import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    console.log(props)
  return (
    <div className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        > </ExpenseItem>
      ))}
    </div>
  );
}

export default Expenses;
