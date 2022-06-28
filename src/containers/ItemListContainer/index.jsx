import React from 'react';
import { ItemList } from '../../components/ItemList/ItemList';
import example from '../../../src/assets/example.png';
import './styles.css';

const ItemListContainer = () => {
  return (
    <div>
      <ItemList 
        stock={3}
        price={10.00}
        currency='€'
        title="Example"
        image={example}
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        items={12} />
    </div>
  )
}
export default ItemListContainer