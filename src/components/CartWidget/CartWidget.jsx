import React from 'react';
import ShoppingCartIcon from '../../assets/shopping-cart.png'

export function CartWidget() {

  return (
      <div>
        <input className='shopping-cart' 
          type="image" 
          src={ShoppingCartIcon} 
          alt="Submit" 
        />
      </div> 
  )
}
