import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';

function ItemDetailContainer() {

  const [productDetail, setProductdetail] = useState({});

  useEffect(()=>{
      const getDetailProducts = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products/1');
          const data = await response.json();
          setProductdetail(data)
        } catch {
          //nope
        }
      }
      getDetailProducts();
  }, [])

  return (
    <ItemDetail product={productDetail}/>
  )
}

export default ItemDetailContainer