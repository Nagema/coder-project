import React, { useState, useEffect } from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import './styles.css';
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredproducts] = useState([]);
  const params = useParams()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const q = query(collection(db, "products"));

        const querySnapshot = await getDocs(q);
        const products = []
        querySnapshot.forEach((doc) => {
          products.push({id: doc.id, ...doc.data()})
        });

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
          stock={3}
          currency='€'
          />
      }
    </div>
  )
}
export default ItemListContainer