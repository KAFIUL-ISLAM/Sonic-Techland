import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data =>
                setUsers(data))
    }, [users])//admin verify

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

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) =>
                        <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.email}</td>
                            <td>
                                {user.role === 'admin' ?
                                    <p className='text-green-600 font-bold'>Admin</p>
                                    :
                                    <button onClick={() => handleUser(user._id)} className="btn btn-xs">Make admin</button>
                                    // :
                                    // <>
                                    //     <label for="delete-confirm" class="btn btn-xs modal-button">Delete</label>
                                    //     <input type="checkbox" id="delete-confirm" class="modal-toggle" />
                                    //     <div class="modal modal-bottom sm:modal-middle">
                                    //         <div class="modal-box">
                                    //             <h3 class="font-bold text-lg">Are you sure about delete?</h3>
                                    //             <p class="py-4">The action cannot be undone!</p>
                                    //             <div class="modal-action">
                                    //                 {/* <button onClick={() => userDelete(user._id)} className="btn">Confirm</button> */}
                                    //                 <label for="delete-confirm" class="btn">Cancel</label>
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    // </>
                                }
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;