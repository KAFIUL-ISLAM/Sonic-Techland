import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useOrderDelete from '../../Hooks/useOrderDelete';

const ManageAllOrders = () => {

    const orderDelete = useOrderDelete();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data =>
                setOrders(data))
    }, [orders])//admin verify

    const handleShipped = id => {
        const orderStatus = { updatedStatus: 'shipped' }
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Order marked as shipped');
                } 
            })
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
                    {orders?.map((order, index) =>
                        <tr key={order._id}>
                            <th>{index+1}</th>
                            <td>{order.email}</td>
                            <td>{order.quantity}</td>
                            <td>${order.price}</td>
                            <td>
                                {order.status === 'paid' ?
                                    <button onClick={()=> handleShipped(order._id)} className="btn btn-xs">Mark shipped</button>
                                    :
                                    order.status === 'shipped' ?
                                        <p className='text-green-600 font-bold'>Shipped</p>
                                        : <>
                                            <label for="delete-confirm" class="btn btn-xs modal-button">Delete</label>
                                            <input type="checkbox" id="delete-confirm" class="modal-toggle" />
                                            <div class="modal modal-bottom sm:modal-middle">
                                                <div class="modal-box">
                                                    <h3 class="font-bold text-lg">Are you sure about delete?</h3>
                                                    <p class="py-4">The action cannot be undone!</p>
                                                    <div class="modal-action">
                                                        <button onClick={() => orderDelete(order._id)} className="btn">Confirm</button>
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