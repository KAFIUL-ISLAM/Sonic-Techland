import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';

const Purchase = () => {

    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/parts/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    const { image, name, description } = item;
    const minOrderQuantity = parseInt(item.minOrderQuantity);
    const available = parseInt(item.quantity);
    const price = parseInt(item.price);

    const [orderQuantity, setOrderQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [error, setError] = useState({});
    useEffect(() => {
        setOrderQuantity(minOrderQuantity);
    }, [minOrderQuantity])
    useEffect(() => {
        if (orderQuantity > 0) {
            setTotalPrice(orderQuantity * price);
        }
    }, [orderQuantity, price])
    useEffect(() => {
        if (orderQuantity > available) {
            setError({
                message: `You cannot order more than ${available}`
            })
        }
        else if (orderQuantity < minOrderQuantity) {
            setError({
                message: `You cannot order less than ${minOrderQuantity}`
            })
        }
        else {
            setError({ message: '' });
        }
    }, [orderQuantity, available, minOrderQuantity])

    const handleSubmit = e => {
        e.preventDefault();
        const email = user.email;
        const userName = user.displayName;
        const itemName = name;
        const phone = e.target.floating_phone.value;
        const company = e.target.floating_company.value;
        const address = e.target.floating_address.value;
        const quantity = e.target.quantity.value;
        const price = totalPrice;
        const status = 'pending';
        const order = {
            email,
            userName,
            itemName,
            phone,
            company,
            address,
            quantity,
            price,
            status
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Your order placed successfully. Go to "My Orders" to pay.');
                    e.target.reset();
                };
            })
    }

    const increaseQuantity = () => {
        setOrderQuantity(orderQuantity + 1);
    }
    const decreaseQuantity = () => {
        setOrderQuantity(orderQuantity - 1);
    }
    const handleChange = e => {

        const inputtedQuantity = parseInt(e.target.value);
        setOrderQuantity(inputtedQuantity);
    }



    return (
        <div>
            <Header></Header>
            <div className='min-h-screen p-2 md:p-8 grid md:grid-cols-2 grid-cols-1 gap-8'>
                <div className="card card-compact md:px-4">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl mt-8">{name}</h2>
                        <p className='mt-8 text-xl'>{description}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className=' mt-8'>
                    <div className='space-y-4 text-slate-500 mb-16 md:mb-32'>
                        <p>Selected product: <span className="font-bold text-lg text-primary">{name}</span></p>
                        <p>Available unit: <span className="font-bold text-lg text-rose-600">{available}</span></p>
                        <p>Price per unit: <span className="font-bold text-lg text-yellow-500">${price}</span></p>
                        <p>Total price: <span className="font-bold text-lg text-orange-600">${totalPrice}</span></p>
                        <div className='flex gap-2 items-center'>
                            <label htmlFor="quantity">Quantity: </label>
                            <div className='border-2 border-gray-300'>
                                <i onClick={decreaseQuantity} className="fa-solid fa-minus px-1 cursor-pointer"></i>
                                <input type="number" name='quantity' min="1" className='w-20 h-8 border-gray-300 border-l-2 border-r-2 border-y-0 text-center text-black'
                                    value={orderQuantity} onChange={handleChange} />
                                <i onClick={increaseQuantity} className="fa-solid fa-plus px-1 cursor-pointer"></i>
                            </div>
                            {
                                error && <p className='text-red-600'>{error.message}</p>
                            }
                        </div>
                    </div>
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
                            <input type="number" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company </label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <textarea type="text" name="floating_address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_address" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
                    </div>
                    <button type="submit" className={`text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${error.message && 'btn-disabled bg-neutral'}`} disabled={error.message}>Submit a booking</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;