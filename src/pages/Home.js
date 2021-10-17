import React from 'react';

import HuNavbar from '../components/HuNavbar';
import HuItemCardsContainer from '../components/HuItemCardsContainer';

const Home = () => {
    return (
        <>
            <HuNavbar />
            {/*<HuItemCardsList />   Pongo esto porque se que funciona */}
            <HuItemCardsContainer /> 
        </>
    );
};

export default Home;