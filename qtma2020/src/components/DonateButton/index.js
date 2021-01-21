import React, { Component } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Navigation from "../NavBar";
import logoBlack from "../../assets/img/logo-black.svg";
import { connect } from "react-redux";
import "./index.css";

const stripePromise = loadStripe(
  "pk_test_51HnvToF7eOu1j3PWQuzMnqZj9BZRncG7KTyrxwP82ATVQA9fZTA86J8nbOeNie6U6oKjxwhY8KCGh5tktROMD4sm00xxzFvrz0"
);

const DonateButton = (props) => {
  const items = "?name=Martha's%20Table&name=Food%20Bank&value=500&value=1000";
  const donate = async (event) => {
    var stripeString = "?";
    props.addedItems.forEach(function (item) {
      var temp = encodeURI(
        "name=" + item.title + "&value=" + item.price * 100 + "&"
      );
      stripeString = stripeString.concat(temp);
    });
    // Get Stripe.js instance
    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const response = await fetch(
      "https://python-voluntera.herokuapp.com/donate" + stripeString,
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
    <button className="donate-button" role="link" onClick={donate}>
      Donate
    </button>
  );
};

export default DonateButton;
