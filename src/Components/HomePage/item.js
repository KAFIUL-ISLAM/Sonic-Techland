import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    
    const { name, price, image } = item;

    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{price}</p>
                <div class="card-actions justify-end">
                    <Link to={'/purchase'}><button class="btn btn-primary">Pre-order now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Item;