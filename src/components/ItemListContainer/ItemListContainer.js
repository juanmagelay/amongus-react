import React, {useState, useEffect} from 'react';
import productData2 from '../data/data.js';
import ItemList from './itemList/ItemList';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect( () => {
        const productList = new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productData2)
            }, 3000); //3000 ms Delay 
        });
        productList.then( (result) => {
            setProducts(productData2) //Promise to obtain products
            setLoading(false)
        });
        },
        [products] //It is executed when products change
    );
    return (
        <>
        <h1 className="text-center">{props.title}</h1>
        {loading ? <h2 className="text-center">Cargando productos</h2> : <ItemList />}
        </>
    );
};

export default ItemListContainer;