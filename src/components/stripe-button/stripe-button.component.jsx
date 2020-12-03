import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey  = 'pk_test_51HuPbvI4IfsQwSBzMw0oo3bDCVSuBsrXqvOHrZOZn6x2qsCrTAEP5QVn52PvaNf38WKEQO9jbQHQOuExv39LdVnb00PSD2y5E1'
    
    let onToken = token => {
        console.log("onToken token: ", token);
        alert('Payment Successfull')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='MxShip'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/b587c7f155'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton