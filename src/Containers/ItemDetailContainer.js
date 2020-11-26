import React, {useState, useEffect} from 'react';
import Products from '../Content/products.json';
import ItemDetail from '../Components/ItemDetail';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
    let getProducts = new Promise((res)=> {
  
        setTimeout(()=>{
          res(Products)
          });
      
      });
      
      
      getProducts.then((res)=> {
       setProducts(res);
      });
      
    }, []);

    useEffect(() => {console.log(products)}, [products]);

    const {id} = useParams();

    const product = products.filter(item => item.id === id)

    return (

        <div>
            <div className='card'>
            <ItemDetail product={product} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;