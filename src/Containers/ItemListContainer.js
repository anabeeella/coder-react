import React, {useState, useEffect} from 'react';
import Products from '../Content/products.json';
import Item from '../Components/Item';


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
    let getProducts = new Promise((res)=> {
  
        setTimeout(()=>{
          res(Products)
          }, 1000);
      
      });
      
      
      getProducts.then((res)=> {
       setProducts(res);
      });
      
    }, []);

    useEffect(() => {}, [products]);

      return  (
        <div>
                {products.length && products.map(product => (
                    <div key={product.id} className='card column is-2'>
                    <Item name={product.name} id={product.id} price={product.price} knitType={product.knitType} />
                    </div>
                ))
                
                }
        </div>
      )
}


export default ItemListContainer;