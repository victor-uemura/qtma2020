import React, { Component } from "react";
import { connect } from "react-redux";
// import "./index.css";
import cartBlack from "../../assets/img/cart-black.png";
import emptyCartBlack from "../../assets/img/emptyCart-black.png";
//import { addShipping } from './actions/cartActions'

class NavBarIconBlack extends Component {
  render() {
    return this.props.addedItems.length == 0 ? (
      <img src={emptyCartBlack} width="20" height="20" alt="cart" />
    ) : (
      <img src={cartBlack} width="20" height="20" alt="cart" />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

export default connect(mapStateToProps)(NavBarIconBlack);
