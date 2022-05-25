import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const ManageItem = () => {

    const { data: items, refetch } = useQuery('items', () => fetch('http://localhost:5000/parts').then(res => res.json()))

    const handleDelete = id => {

        const url = `http://localhost:5000/parts/${id}`;
        fetch(url, {
            method: 'DELETE'
            //admin verify
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
                    {items?.map((item,index) =>
                        <tr key={item._id}>
                            <th>{index + 1}</th>
                            <th><div class="avatar">
                                <div class="w-16 rounded">
                                    <img src={item.image}alt="Tailwind-CSS-Avatar-component" />
                                </div>
                            </div></th>
                            <td>{item.name.slice(0,25)}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td><label for="delete-confirm" class="btn btn-xs modal-button">Delete</label>
                                <input type="checkbox" id="delete-confirm" class="modal-toggle" />
                                <div class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg">Are you sure about delete?</h3>
                                        <p class="py-4">The action cannot be undone!</p>
                                        <div class="modal-action">
                                            <button onClick={() => handleDelete(item._id)} className="btn">Confirm</button>
                                            <label for="delete-confirm" class="btn">Cancel</label>
                                        </div>
                                    </div>
                                </div></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageItem;