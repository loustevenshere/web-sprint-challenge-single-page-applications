import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Orders from "./Orders";

import Pizza from './Pizza'

// Link up Pizza Form and App
const App = () => {
  const emptyPizzaOrderForm = {
    name: '',
    size: '',
    sausage: false,
    pepperoni: false,
    mushrooms: false,
    pineapple: false,
    instructions: '',
};

const emptyErrors = {
  name: ''
}
const emptyPizzaOrder = [];
const btnDisabled = false;



const [formValues, setFormValues] = useState(emptyPizzaOrderForm)
const [order, setOrder] = useState(emptyPizzaOrder);
const [disabled, setDisabled] = useState(btnDisabled);
const [errors, setErrors] = useState(emptyErrors)



  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submit = (evt) => {
    evt.preventDefault();
    const newOrder = {
      nameOrder: formValues.name.trim(),
      sizeOrder: formValues.size.trim(),
      toppingsOrder: ['sausage', 'pepperoni', 'mushrooms', 'pineapple'].filter(toppings => formValues[toppings]),
      instructionsOrder: formValues.instructions.trim(),
    }
    setOrder(order.concat(newOrder))
    setFormValues(emptyPizzaOrderForm)
  }
  const history = useHistory();

  const routeToPizza = () => {
    history.push('/pizza')
  }
  return (
    <>
      <h1>Lambda Pizza</h1>
      <h3>Hot and Juicy</h3>
      <Link to='/'>Home</Link>
      <button onClick={routeToPizza}>Hot Pizza</button>
      <Route path={'/pizza'}>
       <Pizza 
      formValues={formValues} 
      change={inputChange}
      submit={submit} /> 
      
      </Route>
      <Route path={'/pizza'}>
        {
          order.map(pizzaorder => {
            return (
              <Orders key={order[pizzaorder]} orders={pizzaorder} />
            )
          })
        }
      </Route>
    </>
  );
};
export default App;
