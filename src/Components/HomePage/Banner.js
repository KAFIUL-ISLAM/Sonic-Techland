import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: "url(https://api.lorem.space/image/fashion?w=1000&h=800)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl flex-1" alt='...' />
                            <div className='flex-1'>
                                <h1 className="text-5xl font-bold">Box Office News!</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;