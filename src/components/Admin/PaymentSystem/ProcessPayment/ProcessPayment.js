import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCardForm from '../PaymentCardForm/PaymentCardForm';

const stripePromise = loadStripe('pk_test_51IeBG1DcP6n2XaXcl9fLow4LIgJukEM7IDT8srH1rB4jXWkvWL7Zvil4C2SXsWrA2MAOeMYDYj6eCEYHA0jOubwS006GmI2eUH');

const ProcessPayment = ({handlePayment, price}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCardForm price={price} handlePayment={handlePayment}></PaymentCardForm>
        </Elements>
    );
};

export default ProcessPayment;