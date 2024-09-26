

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

function ExpenseItem(props)
{
    function eventHandler()
    {
      console.log('Button Clicked')
    }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div clasName="expense-item__description">
      <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={eventHandler}>Click On Button</button>
    </Card>
  )
  
}

export default ExpenseItem