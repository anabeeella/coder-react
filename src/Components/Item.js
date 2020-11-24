import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({name, id, key, price, knitType}) => {


return (
          <div key={key}>
            <img></img>
            <h3 className='subtitle'>{name}</h3>
            <h4>${price}</h4>
            <p>{knitType}</p>
            <Link to={`/${id}`}><button className='button is-primary'>Ver detalle</button></Link>
          </div>
  )
}

export default Item;