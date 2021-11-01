import React from 'react';

import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
    return (
        <>
            <ItemListContainer greeting={'Todos los productos'} /> 
        </>
    );
};

export default Home;