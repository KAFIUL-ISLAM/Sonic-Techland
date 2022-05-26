import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useOrderDelete from '../../Hooks/useOrderDelete';

const ManageAllOrders = () => {

    const orderDelete = useOrderDelete();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://sonic-techland-server.herokuapp.com/orders')
            .then(res => res.json())
            .then(data =>
                setOrders(data))
    }, [orders])

    const handleShipped = id => {
        const orderStatus = { updatedStatus: 'shipped' }
        fetch(`https://sonic-techland-server.herokuapp.com/orders/${id}`, {
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
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map((order, index) =>
                        <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td>{order.email}</td>
                            <td>{order.quantity}</td>
                            <td>${order.price}</td>
                            {
                                order.status === 'paid' ?
                                    <>
                                        <td>
                                            <p className='text-green-600 font-bold'>Paid</p>
                                        </td>
                                        <td>
                                            <button onClick={() => handleShipped(order._id)} className="btn btn-sm">Mark shipped</button>
                                        </td>
                                    </>
                                    :
                                    order.status === 'shipped' ?
                                        <>
                                            <td>
                                                <p className='text-orange-600 font-bold'>Shipped</p>
                                            </td>
                                            <td></td>
                                        </>
                                        : <>
                                            <td>
                                                <p className='text-red-600 font-bold'>Unpaid</p>
                                            </td>
                                            <td>
                                                <label htmlFor="delete-confirm" className="btn btn-sm modal-button">Delete</label>
                                                <input type="checkbox" id="delete-confirm" className="modal-toggle" />
                                                <div className="modal modal-bottom sm:modal-middle">
                                                    <div className="modal-box">
                                                        <h3 className="font-bold text-lg">Are you sure about delete?</h3>
                                                        <p className="py-4">The action cannot be undone!</p>
                                                        <div className="modal-action">
                                                            <button onClick={() => orderDelete(order._id)} className="btn">Confirm</button>
                                                            <label htmlFor="delete-confirm" className="btn">Cancel</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </>
                            }
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;