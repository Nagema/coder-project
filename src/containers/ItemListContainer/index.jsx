import React, { useState, useEffect } from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

import './styles.css';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredproducts] = useState([]);
  const params = useParams()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        setProducts(data);
        setFilteredproducts(data);
      } catch {
        //nope
      }
    }
    getProducts()
  }, [])

  useEffect(() => {
    if  (params?.categoryId) {
      const filteredProducts = products.filter(product => product.category === params.categoryId)
      setFilteredproducts(filteredProducts);
    } else {
      setFilteredproducts(products);
    }

  }, [params, products])
  return (
    <div>
      { products && 
        <ItemList
          products={filteredproducts}
          stock={3}
          currency='€'
          />
      }
    </div>
  )
}
export default ItemListContainer