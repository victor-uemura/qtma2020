import React from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51HnvToF7eOu1j3PWQuzMnqZj9BZRncG7KTyrxwP82ATVQA9fZTA86J8nbOeNie6U6oKjxwhY8KCGh5tktROMD4sm00xxzFvrz0"
);
function Donate() {
  const donate_five = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const response = await fetch(
      "https://python-voluntera.herokuapp.com/donate-five",
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
  const donate_ten = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const response = await fetch(
      "https://python-voluntera.herokuapp.com/donate-ten",
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
  const donate_twenty = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const response = await fetch(
      "https://python-voluntera.herokuapp.com/donate-twenty",
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
  const donate_fifty = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const response = await fetch(
      "https://python-voluntera.herokuapp.com/donate-fifty",
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
  const donate_hundred = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const response = await fetch(
      "https://python-voluntera.herokuapp.com/donate-hundred",
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
  const donate_twohundred = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const response = await fetch(
      "https://python-voluntera.herokuapp.com/donate-twohundred",
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
    <div className="donate-body">
      <div className="landing-title1">Donate to local businesses</div>
      <div className="donate-grid">
        <button className="donate-button" role="link" onClick={donate_five}>
          $5
        </button>
        <button className="donate-button" role="link" onClick={donate_ten}>
          $10
        </button>
        <button className="donate-button" role="link" onClick={donate_twenty}>
          $20
        </button>
      </div>
      <div className="donate-grid">
        <button className="donate-button" role="link" onClick={donate_fifty}>
          $50
        </button>
        <button className="donate-button" role="link" onClick={donate_hundred}>
          $100
        </button>
        <button
          className="donate-button"
          role="link"
          onClick={donate_twohundred}
        >
          $200
        </button>
      </div>
    </div>
  );
}
export default Donate;
