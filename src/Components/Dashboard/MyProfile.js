import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    const [toEdit, setToEdit] = useState(false);
    const [profile, setProfile] = useState({});
    useEffect(() => {
        fetch(`https://sonic-techland-server.herokuapp.com/profiles/${user.email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [user.email, profile])

    const handleSubmit = e => {
        e.preventDefault();
        const email = user.email;
        const userName = user.displayName;
        const gender = e.target.gender.value;
        const linkedIn = e.target.floating_LinkedIn.value;
        const phone = e.target.floating_phone.value;
        const company = e.target.floating_company.value;
        const education = e.target.floating_education.value;
        const address = e.target.floating_address.value;
        const myProfile = {
            email,
            userName,
            gender,
            linkedIn,
            phone,
            company,
            education,
            address
        }
        fetch(`https://sonic-techland-server.herokuapp.com/profiles/${email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(myProfile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Profile updated added successfully');
                    e.target.reset();
                    setToEdit(false);
                };
            })
    }

    return (
        <div className='border-2 border-primary p-4'>
            <div>
                {toEdit ?
                    <form className='p-8' onSubmit={handleSubmit}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" value={user.email} disabled />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" defaultValue={user.displayName} required />
                            <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <select name="gender" id="gender" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required >
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                                <label htmlFor="gender" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Gender</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_LinkedIn" id="floating_LinkedIn" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_LinkedIn" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">LinkedIn</label>
                            </div>
                        </div>
                        <div className="grid xl:grid-cols-2 xl:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="number" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company </label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_education" id="floating_education" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_education" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Education</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <textarea type="text" name="floating_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                        </div>
                        <button type="submit" className='text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Update Profile</button>
                    </form>
                    :
                    <div className="font-bold space-y-4 relative p-4">
                        <h1 className="text-2xl font-bold text-primary">{user.displayName}</h1>
                        <p>Email address: {user.email}</p>
                        <p>Phone Number: {profile.phone}</p>
                        <p>Gender: {profile.gender}</p>
                        <p>LinkedIn: {profile.linkedIn}</p>
                        <p>Education: {profile.education}</p>
                        <p>Company: {profile.company}</p>
                        <p>Address: {profile.address}</p>
                        <button onClick={() => setToEdit(true)} className="btn btn-primary absolute right-0 top-0">edit</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyProfile;