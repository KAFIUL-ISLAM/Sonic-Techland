import React from 'react';

const Subscribe = () => {
    return (
        <div className='bg-primary
        py-24 px-8 my-24 text-center'>
            <div className='flex gap-8'>
                <p className='text-4xl text-white flx-1'>Subscribe to our Newsletter</p>
                <div className='flex-1'>
                    <input className='rounded-xl ' type="text" />
                    <button className='btn bg-white text-primary'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;