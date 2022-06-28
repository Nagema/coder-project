import React, { useState, useEffect } from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import example from '../../../src/assets/example.png';
import './styles.css';

const ItemListContainer = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch {
        //nope
      }
    }
    getProducts()
  }, [])
  return (
    <div>
      { products && 
        <ItemList
          products={products}
          stock={3}
          currency='€'
          />
      }
    </div>
  )
}
export default ItemListContainer