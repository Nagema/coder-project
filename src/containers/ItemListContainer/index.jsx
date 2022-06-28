import React from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import './styles.css'

const ItemListContainer = ({ 
  title, 
  text, 
  image, 
  items, 
  stock, 
  price, 
  currency  }) => {
  return (
    <div>
      <ItemList 
      items={items}
      title={title}
      text={text}
      image={image}
      stock={stock}
      price={price}
      currency={currency} />
    </div>
  )
}
export default ItemListContainer