import React, { createContext, useState } from 'react'

export const Shop = createContext()

export const ShopProvider = ({children}) => {

    const [stateA, setStateA] = useState('hola que tal')

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

  return (
    <Shop.Provider value={{stateA, setStateA, addItem, removeItem, clear, cart}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider