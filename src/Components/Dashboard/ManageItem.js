import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const ManageItem = () => {

    const { data: items, refetch } = useQuery('items', () => fetch('https://sonic-techland-server.herokuapp.com/parts').then(res => res.json()))

    const handleDelete = id => {

        const url = `https://sonic-techland-server.herokuapp.com/parts/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast("Item deleted successfully");
                refetch();
            })

    }

    return (
        <div className="overflow-x-auto">
            <h1 className="uppercase text-2xl font-bold mb-4">Manage all items</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Available</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item, index) =>
                        <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td><div className="avatar">
                                <div className="w-16 rounded">
                                    <img src={item.image} alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div></td>
                            <td>{item.name.slice(0, 25)}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td><label htmlFor="delete-confirm" className="btn btn-xs modal-button">Delete</label>
                                <input type="checkbox" id="delete-confirm" className="modal-toggle" />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Are you sure about delete?</h3>
                                        <p className="py-4">The action cannot be undone!</p>
                                        <div className="modal-action">
                                            <button onClick={() => handleDelete(item._id)} className="btn">Confirm</button>
                                            <label htmlFor="delete-confirm" className="btn">Cancel</label>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageItem;