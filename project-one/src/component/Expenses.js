

import ExpenseItem from './ExpenseItem';
import './Expenses.css';

import Card from './Card';

function Expenses(props) {
    console.log(props)
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        > </ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
