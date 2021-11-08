import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import MiniProduct from '../MiniProduct/MiniProduct'
import styles from './Cart.module.css'

const Cart = () => {
  const {cartItems, total, price, clear, handleTotalPriceByItem} = useContext(CartContext)
  return (
    <div className={styles.main}>
      <div className={styles.cart}>
        <h2>🛒 Carrito</h2>
        <b>PRODUCTOS: {total}</b>
        <b>TOTAL: ${price}</b>
      </div>
      <div className={styles.btns}>
        <button onClick={clear}>Limpiar carrito</button>
        <button onClick={handleTotalPriceByItem}>carrito con total</button>
      </div>
      <div className={styles.items}>
        {cartItems.map(element => <MiniProduct {...element}/>)}
      </div>
    </div>
  )
}

export default Cart