import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentCardForm = ({ handlePayment, price }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handlePayment(paymentMethod.id);
        }
    };

    return (
        <div className="margin">
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br />
                <div className="row mt-3 d-flex align-items-center">
                    <div className="col-md-8">
                        <h5>Your service charged will be <b>${price}</b></h5>
                    </div>
                    <div className="col-md-4 text-right">
                        <div className="btn-bg-color">
                            <button className="btn text-white btn-style" type="submit" disabled={!stripe}>Place Order</button>
                        </div>
                    </div>
                </div>
            </form>
            {
                paymentError && <p className="text-warning">{paymentError}</p>
            }
            {
                paymentSuccess && <p className="text-success">Your payment has been successfully completed</p>
            }
        </div>
    );
};

export default PaymentCardForm;