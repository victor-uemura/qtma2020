import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import DonateButton from "../DonateButton";

//import { addShipping } from './actions/cartActions'

class Recipe extends Component {
  render() {
    return (
      <div className="containers">
        <div className="collection">
          <div className="checkout-total">
            <b>
              Total:
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {this.props.total} $
            </b>
          </div>
        </div>
        <div className="checkout">
          {this.props.addedItems.length == 0 ? (
            <div />
          ) : (
            <DonateButton
              addedItems={this.props.addedItems}
              total={this.props.total}
            />
          )}
        </div>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
