import React from 'react';
import { useQuery } from 'react-query';

const ManageItem = () => {

    const {data:items} = useQuery('items', () => fetch('http://localhost:5000/parts').then(res => res.json()))
 
    const handleDelete = id => {
        
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map(item =>
                        <tr key={item._id}>
                            <th>1</th>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                        <td><button onClick={()=> handleDelete(item._id)} className="btn btn-xs">Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageItem;