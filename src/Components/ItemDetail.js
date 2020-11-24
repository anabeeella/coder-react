import React from 'react';
import ItemCountContainer from '../Containers/ItemCountContainer';



const ItemDetail = ({name, id, key, price, knitType}) => {


return (
        <div key={key} id={id}>
                <img></img>
                <h3 className='subtitle'>{name}</h3>
                <h4>${price}</h4>
                <p>{knitType}</p>
                <ItemCountContainer min='0' max='10'/>
                <button className='button is-primary'>Agregar al carrito</button>
              </div>
      )
}
    
export default ItemDetail;


