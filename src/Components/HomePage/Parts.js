import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';
import Item from './Item';

const Parts = () => {

    const { data, loading } = useQuery('items', () => fetch('https://sonic-techland-server.herokuapp.com/parts').then(res => res.json()))

    const items = data?.slice(0, 6);

    return (
        <div className='my-32'>
            <h1 className="text-4xl font-bold text-center uppercase mb-4">Our Collections</h1>
            {
                loading ?
                    <Spinner></Spinner>
                    :
                    <div className='grid grid-cols-1 md:grid-cols-3 mx-12 gap-6'>
                        {
                            items?.map((item, index) => <Item key={item._id} item={item} index={index}></Item>)
                        }
                    </div>}
        </div>
    );
};

export default Parts;