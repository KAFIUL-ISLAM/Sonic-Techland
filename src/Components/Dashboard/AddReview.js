import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {

        const review = {
            name: user.displayName,
            email: user.email,
            rating: data.rating,
            review: data.review
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Your review added successfully');
                    reset();
                };
            });
    };

    return (
        <div className="my-32">
            <h1 className="text-2xl font-bold uppercase text-center mb-4">Add a review</h1>
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full mx-4 md:w-1/2 space-y-2">          
                    <input type="number" className="input input-bordered w-full" {...register("rating", { required: true, min: 1, max: 5 })} placeholder="Rating (1 to 5)" />
                    {errors.rating?.type === 'required' && <span className="text-red-600">*This field is required</span>}
                    {errors.rating?.type === 'min' && <span className="text-red-600">You cannot add rating below 1</span>}
                    {errors.rating?.type === 'max' && <span className="text-red-600">You cannot add rating more than 5</span>}
                    <textarea className="input input-bordered w-full" {...register("review", { required: true })} placeholder="Review" />
                    {errors.review && <span className="text-red-600">*This field is required</span>}
                    {
                        errors && errors.message
                    }
                    <input className="btn" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;