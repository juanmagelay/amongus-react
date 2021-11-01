import React from 'react';

export const ItemDetail = ({ id, productTitle, productImg, productPrice }) => {
  return !id ? (
    <h1>EL ITEM NO EXISTE</h1>
  ) : (
    <>
      <h1>{productTitle}</h1>
      <img src={productImg} alt={productTitle} />
      <p>$ {productPrice}</p>
    </>
  );
};
