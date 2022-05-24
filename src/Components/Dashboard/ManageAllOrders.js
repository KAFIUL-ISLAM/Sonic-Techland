import React from 'react';
import { useQuery } from 'react-query';

const ManageAllOrders = () => {

    const { data: orders } = useQuery('orders', () => fetch('http://localhost:5000/parts').then(res => res.json()))

    const handleDelete = id => {

    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map(order =>
                        <tr key={order._id}>
                            <th>1</th>
                            <td>{order.email}</td>
                            <td>${order.quantity}</td>
                            <td>{order.totalPrice}</td>
                            <td>
                                {order.status === 'paid' ?
                                    <button className="btn btn-xs">Shipped</button>
                                    :
                                    order.status === 'shipped' ?
                                        <small className='text-green-600'>Shipped</small>
                                        :
                                        <button onClick={() => handleDelete(order._id)} className="btn btn-xs">Delete</button>}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;