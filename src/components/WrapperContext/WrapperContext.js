import React from 'react'
import { CartContextProvider } from 'context/CartContext'

const WrapperContext = ({children}) => {
  return (
    <CartContextProvider>
      {children}
    </CartContextProvider>
  )
}

export default WrapperContext;