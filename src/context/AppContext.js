import React, { useState, createContext, useEffect } from "react"

export const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
  // cartItems son los items formateados dentro de mi carrito.
  const [cartItems, setCartItems] = useState([])
  // total es el total de items de mi carrito.
  const [total, setTotal] = useState(0)
  // price es el precio total de todos los productos de mi carrito.
  const [price, setPrice] = useState(0)
  
  // hook para calcular los totales cada vez que cartItems cambia.
  useEffect(() => {
    setTotal(handleTotal())
    setPrice(handleTotalPrice())
  }, [cartItems])

  // * Agrego un item al carrito.
  const addItem = (item, count) => {
    // 1. Guardo mi producto en un objeto.
    let cartElement = {item, count}
    console.log(`cartElement`, cartElement)
    // 2. Creo un carrito auxiliar.
    let cartAux = []
    // 3. Consulto si el producto esta en el carrito.
    if (isInCart(item)) {
      console.log(`Esta en el 🛒`)
      // 3.a. Busco el producto por el id.
      cartElement = cartItems.find(element => element.item.id === item.id)
      // 3.b. Actualizo el contador del item filtrado.
      cartElement.count = cartElement.count + count
      // 3.c. retorno el carrito tal como estaba.
      cartAux = [...cartItems]
    } else {
      console.log(`NO esta en el 🛒`)
      // 3.a. Agrego el item al carrito
      cartAux = [cartElement, ...cartItems]
    }
    setCartItems(cartAux)
  }

  // * Quito el elemento del carrito
  const removeItem = (item) => {
    if (isInCart(item)) {
      // 1. FILTRO mi carrito para obtener el resto de los items.
      const cartElements = cartItems.filter(element => element.item.id !== item.id) || []
      // 2. actualizo el carrito, si solo tenia un elemento lo inicializo como []
      setCartItems([...cartElements])
    } 
  }

  // * Limpio el carrito
  const clear = () => {
    // Inicializo el carrito como un array vacio
    return setCartItems([])
  }

  // * Reviso si el item esta en el carrito.
  const isInCart = (item) => {
    // BUSCO si encuentro al menos 1 elemento que cumpla con la condicion.
    return cartItems && cartItems.some(element => element.item.id === item.id)
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        clear,
        isInCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}



