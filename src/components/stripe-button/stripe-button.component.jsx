import React from "react";
import StripeChechout from "react-stripe-checkout";
import { NotificationContainer } from "react-notifications";
import createNotification from "../../notification-messages/notifications.-messages";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_00WkPi6FQNAExRRi1SymgmAh00owxKWtnr";
  const onToken = token => {
    console.log(token);
    createNotification("success", "Payment Succesful!");
  };
  return (
    <div>
      <StripeChechout
        label="Pay Now"
        name="e-commerce"
        billingAddress
        shippingAddress
        img=""
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLable="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
      <NotificationContainer />
    </div>
  );
};

export default StripeCheckoutButton;
