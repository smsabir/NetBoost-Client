import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm/PaymentForm';
import {loadStripe} from '@stripe/stripe-js';

const ProcessPayment = ({handlePayment}) => {
    
    const stripePromise = loadStripe('pk_test_51IemZlBF7KFJDK9q5FoNJZK3UgjOr0EdgM3ERQWn8339prAMMRt1ybkbnZOGm1lliG6UI18l2UQOtMX4gGcOOj1m00Ny1mVuwx');
    return (
        <div className="p-2 " style={{width: '30vw'}} >
            <Elements stripe={stripePromise}>
            <PaymentForm handlePayment={handlePayment}></PaymentForm>
            </Elements>
        </div>
    );
};

export default ProcessPayment;