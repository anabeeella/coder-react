import React from 'react';
import CartItem from '../Components/CartItem';
import {useCartContext} from '../Context/CartContextProvider'
import { Link } from 'react-router-dom';



const CartContainer = () => {

    const {cartList} = useCartContext();

    if(cartList.length === 0) {
        console.log('no hay nadaaa')
        return (
            <div>
                <h1>Nop! Todavía no pediste nada</h1>
                <Link to={`/`}><button>Volver al listado de productos</button></Link>
            </div>
        )
    }
    return (
        <div>
            <h1>Tu pedido es</h1>
            {cartList.map(item => <CartItem {...item} />)}
            <Link to={`/shop`}><button>Confirmar pedido</button></Link>
        </div>
    )
}

export default CartContainer