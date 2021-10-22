import React, {useState, useEffect} from 'react';
import productData2 from '../data/data.js';
import ItemList from './itemList/ItemList';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        const promise = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000); //2000 ms Delay 
        });
        promise.then( (result) => {
            setProducts(result) //Promise to obtain products
        });
        },
        [products] //It is executed when products change
    );
    return (
        <>
        <h1 className="text-center">{props.title}</h1>
        <ItemList />
        </>
    );
};

export default ItemListContainer;