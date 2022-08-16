import React, { useState, useEffect, useContext } from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './styles.css';
import constants from '../../utils/constants';
import getCollection from '../../utils/getCollection';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import { Search } from '../../context/SearchContext';

const ItemListContainer = () => {

  const { searchInput } = useContext(Search);

  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredproducts] = useState([]);
  const params = useParams()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await getCollection('products');

        setProducts(products);
      } catch {
        //nope
      }
    }
    getProducts()
  }, [])

  useEffect(() => {
    const filteredProducts = products
      .filter(product => {
        if (!params?.categoryId) return true;
        return product.category === params.categoryId;
      })
      .filter(product => {
        if (!searchInput) return true;
        return product.title.toLowerCase().includes(searchInput.toLowerCase());
      });
    setFilteredproducts(filteredProducts);

  }, [params, products, searchInput])
  
  return (
    <div>
      { products.length !== 0 
      ? <ItemList
          products={filteredproducts}
          currency={constants.eur}
          />
      : <LoadingComponent />
      }
    </div>
  )
}
export default ItemListContainer