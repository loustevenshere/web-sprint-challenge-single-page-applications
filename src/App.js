import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import schema from './FormSchema'
import Orders from "./Orders";
import Pizza from './Pizza'
import './App.css';

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

// Schema Validation function
const validate = (name, value) => {
  yup
  .reach(schema, name)
  .validate(value)
  .then(valid => {
    setErrors(emptyErrors)
  })
  .catch(err => {
    setErrors({
      ...errors,
      [name]: err.errors[0]
    })
  })
};

// Form Input Change Function
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
// Submit Form Function
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

  // Button disabler useEffect
  useEffect(() => {
    schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])


  // Routing function
  const history = useHistory();
  const routeToPizza = () => {
    return history.push('/pizza')
  }
  return (
    <div className="pizzalogin">
      <h1>Lambda Pizza🍕</h1>
      <h3>Hot and Juicy</h3>
      <Link className="link" to='/'>Home</Link>
     
      <button onClick={routeToPizza}>Hot Pizza</button>
 
      <Route path={'/pizza'}>
       <Pizza 
      formValues={formValues} 
      change={inputChange}
      submit={submit}
      errors={errors}
      disabled={disabled} /> 
        {order.map(pizzaorder => {
            return (
              <Orders key={order[pizzaorder]} orders={pizzaorder} />)})}
      </Route>
    </div>
  );
};
export default App;
