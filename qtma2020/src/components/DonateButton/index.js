import React, { Component } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Navigation from "../NavBar";
import logoBlack from "../../assets/img/logo-black.svg";
import { connect } from "react-redux";
import "./index.css";

const stripePromise = loadStripe(
  "pk_test_51HnvToF7eOu1j3PWQuzMnqZj9BZRncG7KTyrxwP82ATVQA9fZTA86J8nbOeNie6U6oKjxwhY8KCGh5tktROMD4sm00xxzFvrz0"
);
class DonateButton extends Component {
  donate = async (addedItems) => {
    if (addedItems.length != 0) {
      var stripeString = "?";
      addedItems.forEach(function (item) {
        var temp = encodeURI(
          "name=" + item.title + "&value=" + item.price * 100 + "&"
        );
        stripeString = stripeString.concat(temp);
      });
      stripeString = stripeString.substring(0, stripeString.length - 1);

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
    }
  };

  render() {
    return (
      <button
        className="donate-button"
        role="link"
        onClick={this.donate(this.props.addedItems)}
      >
        Donate
      </button>
    );
  }
}

const items = "?name=Martha's%20Table&name=Food%20Bank&value=500&value=1000";

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonateButton);
