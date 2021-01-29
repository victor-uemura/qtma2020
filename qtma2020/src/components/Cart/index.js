import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../actions/cartActions";
import Recipe from "../Recipe";
import "./index.css";
import Navigation from "../NavBar";
import logoBlack from "../../assets/img/logo-black.svg";

class Cart extends Component {
  //to remove the item completely
  handleRemove = (title) => {
    this.props.removeItem(title);
  };

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <div className="item-div">
            <li className="collection-item avatar" key={item.id}>
              <div className="item-img">
                <img src={item.img} alt={item.img} className="hehe" />
              </div>

              <div className="item-desc">
                <div className="item-title">{item.title}</div>
                <p className="desc">{item.desc}</p>
              </div>
              <div>
                <p className="item-amount">${item.amount}</p>
                <button
                  className="item-remove"
                  onClick={() => {
                    this.handleRemove(item.title);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
            <hr />
          </div>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div>
        <Navigation
          logo={logoBlack}
          fontColor="#000"
          background="#fff"
          signUpColor="#fff"
          signUpBackground="#437F55"
        />
        <div className="cart-main">
          <div className="cart">
            <div className="cart-title">Cart</div>
            <div className="cartdonate">
              <div className="collection">{addedItems}</div>
              <Recipe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (title) => {
      dispatch(removeItem(title));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
