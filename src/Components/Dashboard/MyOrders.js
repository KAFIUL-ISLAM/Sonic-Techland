import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const MyOrders = () => {

    const { data: orders } = useQuery('orders', () => fetch('http://localhost:5000/orders').then(res => res.json()))

    const handleDelete = id => {

    }

    return (
        <div className="overflow-x-auto">
            <Link to={"/dashboard/payment/:id"}>
                <button className="btn btn-xs">Pay now</button>
            </Link>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map(order =>
                        <tr key={order._id}>
                            <th>1</th>
                            <td>{order.name}</td>
                            <td>${order.price}</td>
                            <td>{order.quantity}</td>
                            <td>
                                {order.status === 'paid' ?
                                    <small className='text-green-600'>Paid</small>
                                    :
                                    <><button onClick={() => handleDelete(order._id)} className="btn btn-xs">Delete</button>
                                        <Link to={"/payment/:id"}>
                                            <button className="btn btn-xs">Pay now</button>
                                        </Link></>}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;