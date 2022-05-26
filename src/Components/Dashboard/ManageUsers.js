import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data =>
                setUsers(data))
    }, [users])

    const handleUser = id => {
        const userRole = { role: 'admin' }
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userRole)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('User marked as Admin');
                }
            })
    }

    const userDelete = id => {

        const url = `http://localhost:5000/manageUsers/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {

            })

    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) =>
                        <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.email}</td>
                            {user.role === 'admin' ?
                                <>
                                    <td>
                                        <p className='text-green-600 font-bold'>Admin</p>
                                    </td>
                                    <td></td>
                                </>
                                :
                                <>
                                    <td><button onClick={() => handleUser(user._id)} className="btn btn-sm mr-2">Make admin</button></td>
                                    <td>
                                        <label htmlFor="delete-confirm" className="btn btn-sm modal-button">Delete</label>
                                        <input type="checkbox" id="delete-confirm" className="modal-toggle" />
                                        <div className="modal modal-bottom sm:modal-middle">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg">Are you sure about delete?</h3>
                                                <p className="py-4">The action cannot be undone!</p>
                                                <div className="modal-action">
                                                    <button onClick={() => userDelete(user._id)} className="btn">Confirm</button>
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

export default ManageUsers;