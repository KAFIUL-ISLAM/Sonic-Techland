import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item, index }) => {

    const { _id, name, price, image, description, quantity, minOrderQuantity } = item;

    let title = name;
    if (name.length > 30) {
        title = name.slice(0, 30) + '...'
    }


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                {index === 0 && <span className="badge badge-lg absolute top-0 right-5 bg-red-700 text-white border-0">NEW</span>}
                <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body space-y-3 mt-4">
                <p className="font-semibold">Price per unit: <span className="font-bold text-red-600">${price}</span></p>
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}...</p>
                <div className="flex">
                    <p className="font-semibold">Available: <span className="font-bold text-green-600">{quantity}</span></p>
                    <p className="font-semibold text-right">Minimum order: <span className="font-bold text-blue-600">{minOrderQuantity}</span></p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/purchase/${_id}`}><button className="btn btn-primary text-white">Pre-order now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Item;