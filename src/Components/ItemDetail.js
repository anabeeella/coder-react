import React from 'react';
import ItemCountContainer from '../Containers/ItemCountContainer';
import {useCartContext} from '../Context/CartContextProvider'



const ItemDetail = ({item}) => {
console.log(item[0].id);

const {addProduct} = useCartContext();

return (
        <div key={item[0].id}>
                <h1>{item[0].name}</h1>
                <img></img>
                <p>{item[0].knitType}</p>
                <p>{item[0].materials}</p>
                <ItemCountContainer min='0' max='10'/>
                <button onClick={() => addProduct(item)}className='button is-primary'>Agregar al carrito</button>
        </div>
      )
}
    
export default ItemDetail;