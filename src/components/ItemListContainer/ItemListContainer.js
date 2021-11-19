import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import { productData } from '../data/data.js';
import { ItemList } from './itemList/ItemList';

//Import de db que creamos nosotros
import db from '../../lib/firebaseConfig';

//Import de las funciones para traer colecciones, muchos datos
import { collection, query, where, getDocs } from 'firebase/firestore';


export const ItemListContainer = ( { greeting } ) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { catId } = useParams();

    useEffect( () => {
        /*
        DATA LOCAL
            const productList = new Promise( (resolve) => {
                setTimeout(() => {
                    resolve(productData);
                }, 3000); //3000 ms Delay 
            });
            
            productList.then( (res) => {
                catId ? setProducts(res.filter((i) => i.category === catId)) : setProducts(res);
                setLoading(false)
            });
        */
        // DATA DE FIREBASE
        setLoading(true);

        const productList = catId
            ? query(collection(db, 'productData'), where('category', '==', catId))
            : collection(db, 'productData');
  
        // Usamos el paso intermedio de crear un objeto para agregarle el id de firebase, que viene por afuera de nuestro objeto
        getDocs(productList)
            .then((res) => {
                const results = res.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
            setProducts(results);
            })
            .finally(() => setLoading(false));
    }, [catId]);
    
    return (
        <>
        <h1 className="text-center mt-4">{greeting}</h1>
        {loading ? <h2 className="text-center">Cargando productos <Spinner animation="border" variant="primary" /></h2> : <ItemList products={products}/>}
        </>
    );
};
