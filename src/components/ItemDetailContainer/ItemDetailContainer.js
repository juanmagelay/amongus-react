import React, {useState, useEffect} from 'react';
import productData from '../data/data.js';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        const productList = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productData)
            }, 3000); //3000 ms Delay 
        });
        productList.then( (result) => {
            setProducts(productData) //Promise to obtain products
            setLoading(false)
        });
        },
        [id] //It is executed when products change
    );
    return (
        <>
        <h1 className="text-center mt-4">{props.title}</h1>
        {loading ? <h2 className="text-center">Cargando productos</h2> : <ItemDetail {...item}/>}
        </>
    );
};

export default ItemDetailContainer;