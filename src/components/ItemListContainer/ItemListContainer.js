import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { productData } from '../data/data.js';
import { ItemList } from './itemList/ItemList';

export const ItemListContainer = ( { greeting } ) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { catId } = useParams();

    useEffect( () => {
        const productList = new Promise( (resolve) => {
            setTimeout(() => {
                resolve(productData);
            }, 3000); //3000 ms Delay 
        });
        
        productList.then( (res) => {
            catId ? setProducts(res.filter((i) => i.category === catId)) : setProducts(res);
            setLoading(false)
        });
    }, [catId]);
    
    return (
        <>
        <h1 className="text-center mt-4">{greeting}</h1>
        {loading ? <h2 className="text-center">Cargando productos</h2> : <ItemList products={products}/>}
        </>
    );
};
