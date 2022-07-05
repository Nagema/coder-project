import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {

  const [productDetail, setProductdetail] = useState({});
  const params = useParams();

  useEffect(()=>{
      const getDetailProducts = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${params.productId}`);
          const data = await response.json();
          setProductdetail(data)
        } catch {
          //nope
        }
      }
      getDetailProducts();
  }, [params])

  return (
    <ItemDetail product={productDetail}/>
  )
}

export default ItemDetailContainer