import React from 'react';

import HuNavbar from '../components/HuNavbar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
    return (
        <>
            <HuNavbar />
            {/*<ItemList />   Pongo esto porque se que funciona */}
            <ItemListContainer title='Nuestros productos' /> 
        </>
    );
};

export default Home;