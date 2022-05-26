import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useOrderDelete from '../../Hooks/useOrderDelete';
import PaymentModal from './PaymentModal';

const stripePromise = loadStripe('pk_test_51L3PmbFa7GC5fBkDq2E6AKLmTK8Mo5TXVn1E7Jwpf7h74Xny4SRy2vsh5cCUjZfS7rmdW6X0ZvkTwNI5AECTWoAb00JNx5amdz')

const MyOrders = () => {

    const [user] = useAuthState(auth);
    const email = user.email;
    const [orders, setOrders] = useState([]);
    const orderDelete = useOrderDelete();

    useEffect(() => {
        fetch(`https://sonic-techland-server.herokuapp.com/userOrders?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                }
                else {
                    return res.json()
                }
            })
            .then(data => {
                setOrders(data);
            })
    }, [orders, email])


    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map((order, index) =>
                        <tr key={order._id}>
                            <th>{index + 1}</th>
                            <td><div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={order.itemImage} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div></td>
                            <td>{order.itemName?.slice(0, 25)}</td>
                            <td>${order.quantity}</td>
                            <td>{order.price}</td>
                            <td>
                                {order.status === 'paid' ?
                                    <p className='text-green-600 font-bold'>Paid</p>
                                    :
                                    order.status === 'shipped' ?
                                        <p className='text-orange-600 font-bold'>Shipped</p>
                                        :
                                        <>
                                            <label htmlFor="delete-confirm" className="btn btn-xs modal-button mr-2">Delete</label>
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
                                            <label htmlFor="payment-modal" className="btn btn-xs modal-button">Pay now</label>
                                            <input type="checkbox" id="payment-modal" className="modal-toggle" />
                                            <div className="modal modal-bottom sm:modal-middle">
                                                <div className="modal-box">
                                                    <Elements stripe={stripePromise}>
                                                        <PaymentModal order={order} />
                                                    </Elements>
                                                    <div className="modal-action">
                                                        <label htmlFor="payment-modal" className="btn">Cancel</label>
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

export default MyOrders;