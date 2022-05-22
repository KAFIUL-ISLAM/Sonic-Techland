import React from 'react';
import Item from './Item';

const Parts = () => {

    const items = [
        {},
        {},
        {},
        {},
        {},
        {}
    ]
    return (
        <div className='my-32'>
            <h1>Parts section</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-12 gap-6'>
                {
                    items.map(item => <Item></Item>)
                }
            </div>
        </div>
    );
};

export default Parts;