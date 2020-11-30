import React from 'react';
import ItemCountContainer from '../Containers/ItemCountContainer';



const ItemDetail = ({product, id}) => {
        console.log(product)


return (
        <div key={id}>
                <h3>{product}</h3>
                <img></img>
                <ItemCountContainer min='0' max='10'/>
                <button className='button is-primary'>Agregar al carrito</button>
        </div>
      )
}
    
export default ItemDetail;