import React from 'react';

const Item = ({name, id, price, knitType}) => {


return (
<div key={id}>
            <img></img>
            <h3 className='subtitle'>{name}</h3>
            <h4>{price}</h4>
            <p>{knitType}</p>
          </div>
  )
}

export default Item;