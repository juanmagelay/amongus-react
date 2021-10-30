import React from 'react';

import HuNavbar from '../components/HuNavbar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
    return (
        <>
            <HuNavbar />
            <ItemListContainer title='Nuestros productos' /> 
        </>
    );
};

export default Home;