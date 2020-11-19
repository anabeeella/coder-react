import React, {useState, useEffect} from 'react';
import Products from '../Content/products.json';
import Item from '../Components/Item';
import ItemCountContainer from './ItemCountContainer';


const ItemListContainer = ({min, max}) => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
    let getProducts = new Promise((res, rej)=> {
  
        setTimeout(()=>{
          res(Products)
          }, 3000);
      
      });
      
      
      getProducts.then((res)=> {
       setProducts(res);
      });
      
    }, []);

    useEffect(() => {console.log(products)}, [products]);

      return  (
        <div>
                {products.length && products.map(product => (
                    <div  className='card column is-2'>
                    <Item name={product.name} key={product.id} price={product.price} knitType={product.knitType} />
                        <div className='contador'>
                            <ItemCountContainer/>
                        </div>
                    </div>
                ))
                
                }
        </div>
      )
}


export default ItemListContainer;