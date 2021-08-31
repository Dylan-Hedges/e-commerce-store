import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  //Converts item price from $ to cents - Stripe requires all prices be in cents but the items are in $, therefore it needs to be converted
  const priceForeStripe = price * 100;

  //Publish key from Stripe
  const publishableKey = 'pk_test_8K0lsgdaj31N8i3LclDFlq5H';

  //Token that Stripe needs to make a charge - this would be passed to our back end API and the backend handles the charge (uses Stripe secret key), however at this point we are not processing the payment so we just log it out
  const onToken = token => {
      console.log(token);
      alert('Payment Successful')
    }

  //Displays Stripe Pay Now button on screen on the checkout page
  return(
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForeStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
