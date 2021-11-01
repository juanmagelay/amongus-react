import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { productData } from '../data/data.js';
import { ItemDetail } from './ItemDetail/ItemDetail'; 

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productData);
              }, 1000);
        });

        getItems.then((res) => {
            setItem(res.find((i) => i.id === id));
          });
        }, [id]);
    
    return <ItemDetail {...item} />;
};
