import React from 'react'

const MiniProduct = ({item, count}) => {
  const {productTitle, productPrice} = item

  return (
    <div className={styles.main} style={{backgroundColor: color}}>
      <p>{productTitle} | {count}u. x ${productPrice}</p>      
    </div>
  )
}

export default MiniProduct