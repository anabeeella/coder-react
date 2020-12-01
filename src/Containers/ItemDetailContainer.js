import React, {useState, useEffect} from 'react';
import Products from '../Content/products.json';
import ItemDetail from '../Components/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
    let getProducts = new Promise((res)=> {
  
        setTimeout(()=>{
          res(products)
          });
      
      });
      
      
      getProducts.then((res)=> {
       setProducts(res);
      });
      
    }, []);



    
    const { id } = useParams();
    

    const itemSelected = Products.filter(item => item.id === Number(id))
    console.log(itemSelected);

    return (

        <div>
            <div className='card'>
            <ItemDetail item={itemSelected} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;