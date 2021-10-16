import React from 'react';

import HuNavbar from '../components/HuNavbar';
import HuItemCardsList from '../components/HuItemCardsList';
import HuItemCardsContainer from '../components/HuItemCardsContainer';

const Home = () => {
    return (
        <>
            <HuNavbar />
            <HuItemCardsList />  {/* Pongo esto porque se que funciona */}
            <HuItemCardsContainer /> 
        </>
    );
};

export default Home;