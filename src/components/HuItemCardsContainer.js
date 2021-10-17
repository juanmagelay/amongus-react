import React, {useState, useEffect} from 'react';

import HuItemCardsList from './HuItemCardsList';

const HuItemCardsContainer = () => {
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
        <HuItemCardsList />
    );
};

export default HuItemCardsContainer;