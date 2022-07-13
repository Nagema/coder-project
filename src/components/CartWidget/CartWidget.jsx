import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './styles.css';
import { Shop } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';


export function CartWidget() {

  const navigate = useNavigate()

  const goToCart = () => {
    navigate('/cart')
  }

  const {cart} = useContext(Shop);

  return (
      <div className='cart-wrap'>
        <button className='shopping-cart-btn' onClick={goToCart}>   
         {cart.length > 0 && 
           <p>{cart.length}</p>
           } 
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
        </button>  
      </div> 
  )
}