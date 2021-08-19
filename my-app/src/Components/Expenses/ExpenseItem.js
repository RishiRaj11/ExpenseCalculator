import './ExpenseItem.css';// importing css file inside this js file  
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';//useState function this is also called react Hooks  is importing from react i.e is specific which is importing from library

// 
function ExpenseItem(props) {//file name function name must be same
    //const [title, setTitle] = useState(props.title);//useState function is return arr firt one is updated value and 2nd one is a function to be invoked after clicked
    // function clickHandler() {                         //which is destructuring and storing into title and other function name
    //   setTitle("Updated!");//after clicking this functon will invoked  and value is updated
    //  };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>

        </Card>
        /* onClick Event when we r writting function other than that of particular line then something differe fron js in react         
        function clickHandler(){
              console.log('clicked');
            }
             <button onClick={clickHandler}>Edit Title</button>  in react 
              <button onClick="clickHandler()">Edit Title</button>  in js
            --> when we writing function with double with parenthesis in react then itinvoked at the time of return without clicking 
       
        /* onClick event in js onClick="()=>{console.log('hello')}" and in react   onClick={()=>{console.log('hello')}} in inline of button tag */        /* here props is like parmeters which stands for properties  i.e just a object here */
        /*  Instead of class in react we must write clssName   */
        /* whatever we are writing above look like html but this is designed by react team to write here like html in js files */
        /* must be a one root element for return statement like below in example
        <div>
        statements here
        </div>
        or 
        <body>
        statements here
        </body>
          */
        /*

         */
    );
}

export default ExpenseItem; //there must be export statement then we can import this in app.js


