import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddItem = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const imageStorageKey = 'bcf540dfd62d4ac1eef317a2f57047ed';
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const img = result.data.url;
                const item = {
                    name: data.name,
                    price: data.price,
                    minOrderQuantity: data.minOrderQuantity,
                    quantity: data.quantity,
                    description: data.description,
                    image: img
                }
                fetch('http://localhost:5000/parts', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                        //admin verify
                    },
                    body: JSON.stringify(item)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            toast.success('New parts added successfully');
                            reset();
                        };
                    })
            });
    };

    return (
        <div className="flex items-center justify-center my-32">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full mx-4 md:w-1/2 space-y-2">
                <input className="input input-bordered w-full" {...register("name", { required: true })} placeholder="Parts Name" />
                {errors.name && <span className="text-red-600">*This field is required</span>}
                <input type="number" className="input input-bordered w-full" {...register("price", { required: true })} placeholder="Price per unit" />
                {errors.price && <span className="text-red-600">*This field is required</span>}
                <div className="flex gap-2">
                    <div className="flex-1">
                        <input type="number" className="input input-bordered w-full" {...register("minOrderQuantity", { required: true })} placeholder="Minimum order quantity" />
                        {errors.price && <span className="text-red-600">*This field is required</span>}
                    </div>
                    <div className="flex-1">
                        <input type="number" className="input input-bordered w-full" {...register("quantity", { required: true })} placeholder="Stock quantity" />
                        {errors.price && <span className="text-red-600">*This field is required</span>}
                    </div>
                </div>
                <textarea className="input input-bordered w-full" {...register("description", { required: true })} placeholder="Description" />
                {errors.price && <span className="text-red-600">*This field is required</span>}
                <input type="file" className="input input-bordered w-full" {...register("image", { required: true })} />
                {errors.price && <span className="text-red-600">*This field is required</span>}
                <input className="btn" type="submit" />
            </form>
        </div>
    );
};

export default AddItem;