import React from 'react';

export default function Orders(props) {
    const {orders} = props
    return (
        <>
        <div>
            <h2>Your Order Is:</h2>
            <h5>Name: {orders.nameOrder}</h5>
            <h5>Size: {orders.sizeOrder}</h5>
            <h5>Toppings: {orders.toppingsOrder}</h5>
            <h5>Instructions: {orders.instructionsOrder}</h5>
        </div>
        </>
    )
}