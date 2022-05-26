import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/yellow-tools-frame-with-copy-space_23-2148393058.jpg?w=900&t=st=1653577626~exp=1653578226~hmac=1e2829ac972082487ea8c50ed5658f8f374e10cc9972aa8c1b1b2d045ac93d6b)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://img.freepik.com/free-photo/yellow-set-tools-black-background_1303-20314.jpg?t=st=1653577695~exp=1653578295~hmac=6a990eb2deb87b5a51dfc28250f760e687c569102f7b52fc941b3f7b3b3580df&w=740" className="max-w-sm rounded-lg shadow-2xl flex-1" alt='...' />
                            <div className='flex-1 text-white'>
                                <h1 className="text-5xl font-bold uppercase">Find best parts today!</h1>
                                <p className="py-6 font-semibold">We have various types of tools and parts of machineries. We provide best service in quickest time. Also we have best delivery partner who can deliver to you on your doorstep. Book your needed tools right now.</p>
                                <button className="btn btn-primary text-white">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;