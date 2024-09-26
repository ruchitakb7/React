

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

// const m=['January','February','March','April','May','June','July',
//         'August','September','October','November','December']

function ExpenseItem(props)
{
  return(
    <div className="expense-item">

      <ExpenseDate date={props.date}></ExpenseDate>
      
          {/* <div>
        <div>{m[props.date.getMonth()]}</div>
        <div>{props.date.getFullYear()}</div>
        <div>{props.date.getDate()}</div>
        </div> 
        */}
        <div className="expense-item__description" >
          <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
   
        </div>
      </div>
   
    
  )
  
}

export default ExpenseItem