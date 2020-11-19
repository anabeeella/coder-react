import React, {useState} from 'react';
import ItemCount from '../Components/ItemCount';


const ItemCountContainer = ({min, max}) => {
//Logica
//Estado Local
    const [contador, setContador] = useState(0)
//método para sumar y restar
    const onAdd = (sign) => {
        if ((sign === '+') && (contador<max)) setContador(contador+1);
        else if ((sign === '-') && (contador>min)) setContador(contador-1);
    }

    return(
        
        <div> <ItemCount contador={contador} onAdd={onAdd}/></div>
    )
//el primero es propiedad y el segundo es estado

};

export default ItemCountContainer;