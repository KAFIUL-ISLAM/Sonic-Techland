import React, { useEffect, useState } from 'react';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])

    return (
        <div className=' my-32 '>
            <h1 className="text-4xl font-bold my-8 text-center">Reviews</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
                {
                    reviews.map(review => <div key={review._id} className="text-center card w-96 shadow-xl border-2">
                        <div className="card-body">
                            <h2 className="text-lg font-bold">{review.name}</h2>
                            <p>{review.review}</p>
                            <p>Rating: <span className='text-md font-semibold'>{review.rating} out of 5</span></p>
                        </div>
                    </div>)
                }
            </div >
        </div>
    );
};

export default Reviews;