import React from "react";

export const ItemDetail = ({ id, name, image, price, long-description} ) => {

    return <>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <p>{long-description}</p>
        <h3>{price}</h3>
}