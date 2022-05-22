import React from 'react';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';
import Banner from './Banner';
import Parts from './Parts';
import Summary from './Summary';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;