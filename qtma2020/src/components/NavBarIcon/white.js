import React, { Component } from "react";
import { connect } from "react-redux";
// import "./index.css";

import cartWhite from "../../assets/img/cart-white.png";
import emptyCartWhite from "../../assets/img/emptyCart-white.png";

class NavBarIconWhite extends Component {
  render() {
    return this.props.addedItems.length == 0 ? (
      <img src={emptyCartWhite} width="20" height="20" alt="cart" />
    ) : (
      <img src={cartWhite} width="20" height="20" alt="cart" />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

export default connect(mapStateToProps)(NavBarIconWhite);
