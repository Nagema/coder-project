import React, { createContext, useState }from 'react'

export const Shop = createContext()

const ShopProvider = ({children}) => {

    const [stateA, setStateA] = useState('hola que tal')
  return (
    <Shop.Provider value={{stateA, setStateA}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider