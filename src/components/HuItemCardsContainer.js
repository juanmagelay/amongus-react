import React, {useState} from 'react';

import HuItemCardsList from './HuItemCardsList';

//Promise para obtener los productos
//Delay de 2000 ms

const HuItemCardsContainer = () => {
    React.useEffect( () => {
        const [products, setProducts] = useState([]);
        const promise = new Promise( (resolve, reject) => {
        const products = [
            <HuItemCardsList.productData/>
        ];
        setTimeout(() => {
            resolve(products)
        }, 2000);
        });
    
        promise.then( (result) => {
        setProducts(result)
        });
        },
        [products] //Se ejecuta cuando haya un cambio en products
    );
    return (
        <HuItemCardsList />
    );
};

export default HuItemCardsContainer;