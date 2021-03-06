import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const PaymentModal = ({ order }) => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const { _id, email, price, name } = order;

    useEffect(() => {
        fetch('https://sonic-techland-server.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price])

    const handleSubmit = async e => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message);
        }
        else {
            setError('');
        }

        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    }
                }
            }
        );
        if (paymentError) {
            setError(paymentError?.message);
        }
        else {
            setError('');
            toast.success('Payment Completed Successfully');
            const orderStatus = { updatedStatus: 'paid' }
            fetch(`https://sonic-techland-server.herokuapp.com/orders/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderStatus)
            })
                .then(res => res.json())
                .then(data => {

                })
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }} />
                <button className="btn mt-4" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>

            </form>
            {
                error && <span className="text-red-600 mt-4">{error}</span>
            }
        </>
    );
};

export default PaymentModal;