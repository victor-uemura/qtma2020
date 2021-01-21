import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions/cartActions";
import "./index.css";
import Navigation from "../NavBar";
import logoBlack from "../../assets/img/logo-black.svg";

class Temp extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <span className="card-title">{item.title}</span>
            <span
              to="/"
              className="btn-floating halfway-fab waves-effect waves-light red"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <button className="material-icons">add</button>
            </span>
          </div>

          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b>Price: {item.price}$</b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Navigation
          logo={logoBlack}
          fontColor="#000"
          background="#fff"
          signUpColor="#fff"
          signUpBackground="#437F55"
        />
        <div className="container">
          <div className="box">{itemList}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Temp);
