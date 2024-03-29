import React, { createContext, useState } from 'react'

export const Shop = createContext()

export const ShopProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (product, quantity) => {
      const sameProduct = isInCart(product);

      if (sameProduct) {
          if (sameProduct.stock > sameProduct.addedProducts) {
            sameProduct.addedProducts += quantity
            setCart([...cart])
          } return
      } else { 
        setCart([...cart, {...product, addedProducts: quantity }])
      }
    }

    const isInCart = (product) => {
      return cart.find( element => element.id === product.id)
    }

    const removeItem = (product, quantity) => {

      const sameProduct = isInCart(product);
      if(!sameProduct) return;

      sameProduct.addedProducts -= quantity
      setCart(cart.filter(product => product.addedProducts > 0))

    }
    const clear = () => {
      setCart([]);
    }

    let totalItems = 0;
  
    cart.forEach(item => {
      totalItems += item.addedProducts;
    });

    let totalPrice = 0;
  
    cart.forEach(item => {
      totalPrice += (item.price * item.addedProducts);
    });

  return (
    <Shop.Provider value={{addItem, removeItem, clear, cart, totalItems, totalPrice}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider