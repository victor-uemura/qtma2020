import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const stripePromise = loadStripe(
  "pk_test_51HnvToF7eOu1j3PWQuzMnqZj9BZRncG7KTyrxwP82ATVQA9fZTA86J8nbOeNie6U6oKjxwhY8KCGh5tktROMD4sm00xxzFvrz0"
);
function Donate() {
  // const [product] = React.useState({
  //   name: "Tesla Roadster",
  //   price: 64998.67,
  //   description: "Cool car",
  // });

  // async function handleToken(token, addresses) {
  //   const response = await axios.post(
  //     "https://stripe-voluntera.herokuapp.com/checkout",
  //     {
  //       token,
  //       product,
  //     }
  //   );
  //   const { status } = response.data;
  //   console.log("Response:", response.data);
  //   // if (status === "success") {
  //   //   toast("Success! Check email for details", { type: "success" });
  //   // } else {
  //   //   toast("Something went wrong", { type: "error" });
  //   // }
  // }

  // return (
  //   <div className="container">
  //     <div className="product">
  //       <h1>{product.name}</h1>
  //       <h3>On Sale · ${product.price}</h3>
  //     </div>
  //     <StripeCheckout
  //       stripeKey="pk_test_51HnvToF7eOu1j3PWQuzMnqZj9BZRncG7KTyrxwP82ATVQA9fZTA86J8nbOeNie6U6oKjxwhY8KCGh5tktROMD4sm00xxzFvrz0"
  //       token={handleToken}
  //       amount={product.price * 100}
  //       name="Tesla Roadster"
  //       billingAddress
  //       shippingAddress
  //     />
  //   </div>
  // );
  const handleClick = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch(
      "http://127.0.0.1:4242/create-checkout-session",
      {
        method: "POST",
      }
    );

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
}
export default Donate;
