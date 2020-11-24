import React, {useState, useEffect} from 'react';
import Products from '../Content/products.json';
import ItemDetail from '../Components/ItemDetail';

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

    
    return (

        <div>
        {products.length && products.map(product => (
            <div  className='card'>
            <ItemDetail name={product.name} id={product.id} key={product.id} price={product.price} knitType={product.knitType} />
            </div>
        ))
        
        }
</div>
    )
}

export default ItemDetailContainer;