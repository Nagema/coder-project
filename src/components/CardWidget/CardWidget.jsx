import React from 'react'
import ShoppingCartIcon from '../../shopping-cart.png';

export function CardWidget() {

  return (
      <div>
        <input className='shopping-cart' type="image" src={ShoppingCartIcon} alt="Submit"></input>
      </div> 
  )
}
