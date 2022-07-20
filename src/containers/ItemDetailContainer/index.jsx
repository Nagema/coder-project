import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

function ItemDetailContainer() {

  const [productDetail, setProductdetail] = useState({});
  const params = useParams();

  useEffect(()=>{
      const getDetailProducts = async () => {
        try {
          const docRef = doc(db, "products", params.productId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const productDetail = {id: docSnap.id, ...docSnap.data()}
            setProductdetail(productDetail)
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
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