import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// price needs to be in cents
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = `pk_test_51IDz9gE68hqVzXB4yTa7WuwsjgBmYLMpM9I9yWdmxiTWSFMj3oPUv32UurZTHYA8gEhojFhImahUtTS4aFTAUBRd00NfV18WId`;

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
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
