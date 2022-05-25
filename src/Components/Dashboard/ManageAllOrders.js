import React from 'react';
import { useQuery } from 'react-query';

const ManageAllOrders = () => {

    const { data: orders } = useQuery('orders', () => fetch('http://localhost:5000/orders').then(res => res.json()))//admin verify

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
                                        : <>
                                            <label for="delete-confirm" class="btn btn-xs modal-button">Delete</label>
                                            <input type="checkbox" id="delete-confirm" class="modal-toggle" />
                                            <div class="modal modal-bottom sm:modal-middle">
                                                <div class="modal-box">
                                                    <h3 class="font-bold text-lg">Are you sure about delete?</h3>
                                                    <p class="py-4">The action cannot be undone!</p>
                                                    <div class="modal-action">
                                                        <button onClick={() => handleDelete(order._id)} className="btn">Confirm</button>
                                                        <label for="delete-confirm" class="btn">Cancel</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </>}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;