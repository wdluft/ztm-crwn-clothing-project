import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

// price needs to be in cents
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = `pk_test_51IDz9gE68hqVzXB4yTa7WuwsjgBmYLMpM9I9yWdmxiTWSFMj3oPUv32UurZTHYA8gEhojFhImahUtTS4aFTAUBRd00NfV18WId`;

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log(`Payment error: ${JSON.parse(error)}`);
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now 💳"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now 💳"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
