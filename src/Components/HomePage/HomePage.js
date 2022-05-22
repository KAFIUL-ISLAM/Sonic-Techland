import React from 'react';
import Header from '../CommonComp/Header';

const HomePage = () => {
    return (
        <div className=''>
            <div className='flex flex-col md:flex-row justify-between bg-slate-200 px-4 py-2'>
                <p>
                    <i className="far fa-envelope"></i>
                    info.sonic@techland.com</p>
                <p>
                    <i className="fas fa-location-dot"></i>
                    Bogura sadar, Bangladesh</p>
                <div>
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
            <h1>this is home</h1>
        </div>
    );
};

export default HomePage;