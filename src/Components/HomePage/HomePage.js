import React from 'react';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';
import Banner from './Banner';
import Parts from './Parts';
import Summary from './Summary';

const HomePage = () => {
    return (
        <div className=''>
            <div className='flex flex-col md:flex-row justify-between bg-slate-200 px-4 py-2'>
                <div className='flex flex-col md:flex-row gap-2'>
                    <p>
                        <i className="far fa-envelope"></i>
                        info.sonic@techland.com</p>
                    <p>
                        <i className="fas fa-location-dot"></i>
                        Bogura sadar, Bangladesh</p>
                </div>
                <div className='hidden md:block'>
                    <ul className="flex gap-8">
                        <li>
                            <i className="fab fa-facebook-f"></i>
                        </li>
                        <li>
                            <i className="fab fa-linkedin-in"></i>
                        </li>
                        <li>
                            <i className="fab fa-twitter"></i>
                        </li>
                        <li>
                            <i className="fab fa-instagram"></i>
                        </li>
                    </ul>
                </div>
            </div>
            <Header></Header>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;