import React, { useState } from 'react';
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';



const PaymentForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const[paymentErrorMsg, setPaymentErrorMsg] = useState('');
    

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
            console.log('[error]', error);
            setPaymentErrorMsg(error.message);
            
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            if(paymentMethod.id){
               
                handlePayment(paymentMethod.id);
                setPaymentErrorMsg('');
            }
            
            
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                    options={{
                        style: {
                            base: {
                                backgroundColor: '#fafafc',
                                lineHeight: '30px',
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
                    }}
                />
            <button className="btn btn-secondary mt-4 pl-3 pr-3 mb-4" type="submit" disabled={!stripe}>
                Pay
      </button>
                    <h6 className="text-danger">{paymentErrorMsg}</h6>
                   
        </form>
    );
};

export default PaymentForm;