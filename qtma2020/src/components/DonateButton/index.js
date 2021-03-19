import React, { Component } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { withRouter } from "react-router-dom";

import "./index.css";
import { AuthUserContext } from "../Session";
import { withFirebase } from "../Firebase";
import { compose, withProps } from "recompose";

const stripePromise = loadStripe(
  "pk_test_51HnvToF7eOu1j3PWQuzMnqZj9BZRncG7KTyrxwP82ATVQA9fZTA86J8nbOeNie6U6oKjxwhY8KCGh5tktROMD4sm00xxzFvrz0"
);

const DonateButton = (props) => (
  <AuthUserContext.Consumer>
    {(authUser) =>
      authUser ? (
        <DonateButtonFire authUser={authUser} addedItems={props.addedItems} />
      ) : (
        <DonateButtonFire authUser="" addedItems={props.addedItems} />
      )
    }
  </AuthUserContext.Consumer>
);

class DonateButtonBase extends Component {
  donate = async (event) => {
    var stripeString = "?";
    this.props.addedItems.forEach(function (item) {
      var temp = encodeURI(
        "name=" + item.title + "&value=" + item.amount * 100 + "&"
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
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  };
  render() {
    return (
      <button className="donate-button" role="link" onClick={this.donate}>
        Donate
      </button>
    );
  }
}

const DonateButtonFire = compose(withRouter, withFirebase)(DonateButtonBase);

export default DonateButton;
