import React from 'react'
import ItemCount from './ItemCount';


const CartItem = (props) => {
console.log(props);


    return (
        
        <div key={props.id}>
            <h3>{props.name}</h3>
            <p>$ {props.price}</p>
            <p>{props.amount}</p>
        </div>    
    )
}

export default CartItem