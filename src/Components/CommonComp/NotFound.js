import React from 'react';

const NotFound = () => {
    return (
        <div className='bg-primary min-h-screen flex justify-center items-center'>
            <div className='bg-white md:px-8 rounded-2xl shadow-inner shadow-black pb-12'>
                <img src="https://i.ibb.co/8Pxr85g/png-clipart-http-404-user-interface-design-design-purple-text-removebg-preview.png" alt="" />
                <h1 className='text-primary font-bold text-6xl text-center'>Oops! Page Not FOund!!</h1>
            </div>
        </div>
    );
};

export default NotFound;