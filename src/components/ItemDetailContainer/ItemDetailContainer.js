import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

//import { productData } from '../data/data.js';
import { ItemDetail } from './ItemDetail/ItemDetail';

//Import de db que creamos nosotros
import db from '../../lib/firebaseConfig';

//imports para traer UN solo dato
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        /*
        DATA LOCAL
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productData);
              }, 1000);
        });

        getItems.then((res) => {
            setItem(res.find((i) => i.id === id));
          });
        */
        setLoading(true);
        const getItems = doc(db, 'productData', id);
    
        // aca usamos el paso intermedio de crear un objeto para agregarle el id de firebase, que viene por afuera de nuestro objeto
        getDoc(getItems)
        .then((res) => {
            const result = { id: res.id, ...res.data() };
            setItem(result);
        })
            .finally(() => setLoading(false));
        }, []);
    
    return loading ? (
        <>
        <h2 className="text-center">Cargando producto <Spinner animation="border" variant="primary" /></h2> 
        </>
    ) : (<ItemDetail {...item} />);
};
