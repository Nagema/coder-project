import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './styles.css'

export function CartWidget() {

  return (
      <div className='cart-wrap'>
        <button className='shopping-cart-btn'>   
          <p>{0}</p>
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
        </button>  
      </div> 
  )
}