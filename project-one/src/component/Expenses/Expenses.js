

import ExpenseItem from './ExpenseItem';
import './Expenses.css';

import Card from '../UI/Card';

function Expenses(props) {
    console.log(props)
  return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        > </ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
