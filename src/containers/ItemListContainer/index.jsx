import React, { useState, useEffect } from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './styles.css';
import constants from '../../utils/constants';
import getCollection from '../../utils/getCollection';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredproducts] = useState([]);
  const params = useParams()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await getCollection('products');

        setProducts(products);
        setFilteredproducts(products);
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
          currency={constants.eur}
          />
      }
    </div>
  )
}
export default ItemListContainer