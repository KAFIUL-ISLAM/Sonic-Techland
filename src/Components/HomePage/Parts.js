import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import Item from './Item';

const Parts = () => {

    const { data: items, loading } = useQuery('items', () => fetch('http://localhost:5000/parts').then(res => res.json()))

    return (
        <div className='my-32'>
            <h1>Parts section</h1>
            {
                loading ?
           <Spinner></Spinner>
                :
                <div className='grid grid-cols-1 md:grid-cols-3 mx-12 gap-6'>
                {
                    items?.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>}
        </div>
    );
};

export default Parts;